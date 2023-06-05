import React, { Dispatch, SetStateAction, useState } from 'react';
import { Modal } from './Modal';
import { useMovimientosContext } from '@context/MovimientosContext';
import { FormButton } from './FormButton';
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_MATERIALES, GET_MATERIALES } from '../../grahpql/client/material';
import { Materiales } from '.prisma/client';
import { CREATE_ENTRADAS } from '../../grahpql/client/entradas';

const ModalEntradas = () => {
  const { openModalEntradas, setOpenModalEntradas } = useMovimientosContext();
  return (
      <Modal title="Agregar Entrada" open={openModalEntradas} setOpen={setOpenModalEntradas}>
        <FormModalEntradas setOpenModal={setOpenModalEntradas} />
      </Modal>
  );
};

interface FormModalEntradasInterface {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const FormModalEntradas = ({ setOpenModal }: FormModalEntradasInterface) => {
  const { data, loading, error } = useQuery(GET_MATERIALES);
  const [materialId, setMaterialId] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [entryDate, setEntryDate] = useState<string>('');

  const [createEntrada] = useMutation(CREATE_ENTRADAS);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createEntrada({
        variables: {
          material: Number(materialId),
          fechaMovimiento: entryDate,
          cantidad: Number(quantity),
        },
      });

      console.log('Result:', result);
      // Realizar las acciones necesarias después de crear la entrada

      setOpenModal(false); // Cerrar el modal
    } catch (error) {
      console.error(error);
      // Manejar el error en caso de que ocurra durante la creación de la entrada
    }
  };

  if (loading) return <p>loading...</p>;

  return (
      <div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <label htmlFor="material">
            <span>Material</span>
            <select name="material" value={materialId} onChange={(e) => setMaterialId(e.target.value)}>
              <option value="" disabled>
                Seleccione el material
              </option>
              {data?.materiales.map((material: Materiales) => (
                  <option key={material.id} value={material.id}>
                    {material.nombre}
                  </option>
              ))}
            </select>
          </label>
          <label htmlFor="entry">
            <span>Cantidad a ingresar</span>
            <input
                type="number"
                name="entry"
                placeholder="0"
                min={0}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </label>
          <label htmlFor="entryDate">
            <span>Fecha del ingreso</span>
            <input type="date" name="entryDate" value={entryDate} onChange={(e) => setEntryDate(e.target.value)} />
          </label>
          <FormButton loading={false} setOpenModal={setOpenModal} />
        </form>
      </div>
  );
};

export { ModalEntradas };
