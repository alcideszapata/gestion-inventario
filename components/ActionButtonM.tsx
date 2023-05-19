import { useMovimientosContext } from "@context/MovimientosContext";

const ActionButtonM = () => {
  const {setOpenModalEntradas, setOpenModalSalidas} = useMovimientosContext();
   return (
    <div className='flex gap-3 items-end'>
      <button onClick={()=>setOpenModalEntradas(true)} >Agregar Entrada</button>
      <button onClick={()=>setOpenModalSalidas(true)}>Agregar Salida</button>
    </div>
    
  );
};

export {ActionButtonM};