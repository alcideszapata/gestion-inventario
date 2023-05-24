import { useMovimientosContext } from '@context/MovimientosContext';
import React from 'react'
import { Modal } from './Modal';

const ModalAgregarMateriales = () => {
    const {openModalAgregarMateriales, setOpenModalAgregarMateriales} = useMovimientosContext();
  return (
    <Modal title='Agregar Entrada' open={openModalAgregarMateriales} setOpen={setOpenModalAgregarMateriales}>
    <FormModalAgregarMateriales/>
    </Modal>
  );
};

const FormModalAgregarMateriales = ()=>{
    return (
        <div>
            <form className='flex flex-col gap-3'>
                <label htmlFor="material">
                    <span>Material</span>
                    <input type= 'string' name='material' placeholder='material a agregar'/>
                </label>
                <label htmlFor="Entry">
                    <span>Cantidad de material</span>
                    <input type= 'number' name='entry' placeholder='0' min={0}/>
                </label>
                <label htmlFor="date">
                    <span>Fecha de ingreso</span>
                    <input type= 'date' name='entryDate'/>
                </label>
                <div className='flex w-full gap-3 justify-center'>
                    <button type='button' className='secondary'>Confirmar</button>
                </div>
            </form>
        </div>
    );
};

export  {ModalAgregarMateriales};