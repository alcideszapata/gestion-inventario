import React, { Dispatch, SetStateAction } from 'react'
import { Modal } from './Modal'
import { useMovimientosContext } from '@context/MovimientosContext';
import { FormButton } from './FormButton';

const ModalSalidas = () => {
  const {openModalSalidas, setOpenModalSalidas} = useMovimientosContext();
  return (
    <Modal title='Agregar Salida' open={openModalSalidas} setOpen={setOpenModalSalidas}>
        <FormModalSalidas setOpenModal={setOpenModalSalidas} />
    </Modal>
  );
};

interface FormModalSalidasProps{
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const FormModalSalidas = ({setOpenModal}:FormModalSalidasProps) => {
  return (
    <div>
      <form className='flex flex-col gap-3'>
      <label htmlFor="deatail">
        <span>Nombre del artículo</span>
        <input type= 'string' name='detail' placeholder='artículo a descargar' />
      </label>
      <label htmlFor="discharge">
        <span>Cantidad a sacar</span>
        <input type= 'number' name='discharge' placeholder='0' min={0}/>
      </label>
      <label htmlFor="date">
        <span>Fecha del ingreso</span>
        <input type= 'date' name='dischargeDate'/>
      </label>
      <FormButton
        loading={false}
        setOpenModal={setOpenModal}
      />
      </form>
    </div>
  )
}

export {ModalSalidas};