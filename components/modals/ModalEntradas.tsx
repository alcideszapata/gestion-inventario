import React, { Dispatch, SetStateAction, useState } from 'react'
import { Modal } from './Modal'
import { useMovimientosContext } from '@context/MovimientosContext';
import { FormButton } from './FormButton';
import { useQuery } from "@apollo/client";
import { GET_MATERIALES } from "../../grahpql/client/material";
import { Materiales } from ".prisma/client";

const ModalEntradas = () => {
  const { openModalEntradas, setOpenModalEntradas } = useMovimientosContext();
  return (
      <Modal title='Agregar Entrada' open={openModalEntradas} setOpen={setOpenModalEntradas}>
        <FormModalEntradas setOpenModal={setOpenModalEntradas} />
      </Modal>
  );
};

interface FormModalEntradasInterface {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const FormModalEntradas = ({ setOpenModal }: FormModalEntradasInterface) => {
  const { data, loading, error } = useQuery(GET_MATERIALES);
  const [materialId, setMaterialId] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [entryDate, setEntryDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Material ID:", materialId);
    console.log("Quantity:", quantity);
    console.log("Entry Date:", entryDate);
  };

  if (loading) return <p>loading...</p>;

  return (
      <div>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
          <label htmlFor="material">
            <span>Material</span>
            <select name='material' value={materialId} onChange={(e) => setMaterialId(e.target.value)}>
              <option value="" disabled>Seleccione el material</option>
              {data?.materiales.map((material: Materiales) => (
                  <option key={material.id} value={material.id}>
                    {material.nombre}
                  </option>
              ))}
            </select>
          </label>
          <label htmlFor="entry">
            <span>Cantidad a ingresar</span>
            <input type='number' name='entry' placeholder='0' min={0} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
          </label>
          <label htmlFor="entryDate">
            <span>Fecha del ingreso</span>
            <input type='date' name='entryDate' value={entryDate} onChange={(e) => setEntryDate(e.target.value)} />
          </label>
          <FormButton
              loading={false}
              setOpenModal={setOpenModal}
          />
        </form>
      </div>
  );
};

export { ModalEntradas };
