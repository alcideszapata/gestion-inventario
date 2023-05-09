import React from 'react'
import { Modal } from './Modal';
/*import { useEntradasContext } from '@context/EntradasContext';*/
interface ModalSalidasProps{
  openModalSalidas: boolean;
  setOpenModalSalidas: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalSalidas = ({openModalSalidas, setOpenModalSalidas}:ModalSalidasProps) => {
    /*const {openModalSalidas, setOpenModalSalidas} = useEntradasContext();*/
  return (
    <Modal 
        title= 'Agregar Salida'
        open={openModalSalidas}
        setOpen={setOpenModalSalidas}
    >
        <div>Este es el modal Salidas</div>
    </Modal>
  );
};
export {ModalSalidas};