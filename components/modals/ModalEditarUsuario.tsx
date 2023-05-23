import React from 'react'
import { Modal } from './Modal';
import { useMovimientosContext } from '@context/MovimientosContext';

const ModalEditarUsuario = () => {
    const {openModalEditarUsuarios, setOpenModalEditarUsuarios} = useMovimientosContext();
    return (
        <Modal title='Agregar Entrada' open={openModalEditarUsuarios} setOpen={setOpenModalEditarUsuarios}>
        <FormModalEditarUsuario/>
        </Modal>
    );
};

const FormModalEditarUsuario = ()=>{
    return (
    <div>
        <form className='flex flex-col gap-3'>
            <label htmlFor="user">
                <span>Usuario</span>
                <input type= 'string' name='user' placeholder='usuario a editar'/>
            </label>
            <label htmlFor="rol">
                <span>Rol Actual</span>
                <input type= 'string' name='rol' placeholder='rol actual'/>
            </label>
            <label htmlFor="rol">
                <span>Nuevo Actual</span>
                <input type= 'string' name='rol' placeholder='nuevo actual'/>
            </label>
            <div className='flex w-full gap-3 justify-center'>
                <button type='button' className='secondary'>Confirmar</button>
            </div>
        </form>
    </div>
    );
};

export {ModalEditarUsuario};