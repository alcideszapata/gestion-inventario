import { useMovimientosContext } from "@context/MovimientosContext"


const ActionButtonA = () => {
    const {setOpenModalAgregarMateriales}= useMovimientosContext();
  return (
    <div className='flex gap-3 items-end'>
        <button onClick={()=>setOpenModalAgregarMateriales(true)}>Agregar material</button>        
    </div>
  );
};

export default ActionButtonA;