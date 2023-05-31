import React, { Dispatch, SetStateAction } from 'react'
import { Modal } from './Modal'
import { useMovimientosContext } from '@context/MovimientosContext';
import { FormButton } from './FormButton';
import {useQuery} from "@apollo/client";
import {GET_MATERIALES} from "../../grahpql/client/material";
import materiales from "../../pages/Materiales";
import {Materiales} from ".prisma/client";

const ModalEntradas = () => {
  const {openModalEntradas, setOpenModalEntradas} = useMovimientosContext();
  return (
    <Modal title='Agregar Entrada' open={openModalEntradas} setOpen={setOpenModalEntradas}>
      <FormModalEntradas setOpenModal={setOpenModalEntradas} />
    </Modal>
  );
};

interface FormModalEntradasIntercafe {
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const FormModalEntradas = ({setOpenModal}:FormModalEntradasIntercafe)=>{
  const {data, loading, error} = useQuery(GET_MATERIALES);
  if (loading) return <p>loading...</p>;
  return (
  <div>
    <form className='flex flex-col gap-3'>
    <label htmlFor="deatail">
        <span>Material</span>
      <select name='material'>
        <option disabled>Seleccione el material</option>
        {data?.materiales.map(( material ) => (
            <option key={material.id} value={material.id}>
              {material.nombre}
            </option>
        ))}
      </select>
      </label>
      <label htmlFor="Entry">
        <span>Cantidad a ingresar</span>
        <input type= 'number' name='entry' placeholder='0' min={0}/>
      </label>
      <label htmlFor="date">
        <span>Fecha del ingreso</span>
        <input type= 'date' name='entryDate'/>
      </label>
      <FormButton
        loading={false}
        setOpenModal={setOpenModal}
      />
    </form>
  </div>
  );
};

export {ModalEntradas};
