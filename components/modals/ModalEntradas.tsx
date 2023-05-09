import React from 'react'
import { Modal } from './Modal';
import { Interface } from 'readline/promises';

interface ModalEntradasProps{
    openModalEntradas: boolean;
    setOpenModalEntradas: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalEntradas = ({openModalEntradas, setOpenModalEntradas}:ModalEntradasProps) => {
  return (
    <Modal 
    title='Agregar Entradas' 
    open={openModalEntradas} 
    setOpen={setOpenModalEntradas} 
  >
    <div>Este es el modal de entradas</div>          
  </Modal>
  );
};

export {ModalEntradas};