import React, { Dispatch, SetStateAction } from 'react'
import { Modal } from './Modal'
import { useMovimientosContext } from '@context/MovimientosContext';
import { FormButton } from './FormButton';

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
  return (
  <div>
    <form className='flex flex-col gap-3'>
    <label htmlFor="deatail">
        <span>Nombre del artículo</span>
        <input type= 'string' name='detail' placeholder='artículo a ingresar' />
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