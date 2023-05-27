import { useMovimientosContext } from '@context/MovimientosContext';

const ActionButtonU = () => {
  const {setOpenModalEditarUsuarios}= useMovimientosContext();
    return (
      <div className='flex gap-3 items-end'>
        <button onClick={()=>setOpenModalEditarUsuarios(true)}>Editar Usuario</button>
      </div>
    );
};

export {ActionButtonU};