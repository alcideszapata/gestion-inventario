import React, { Dispatch, SetStateAction } from 'react'
import ReactLoading from 'react-loading';

 interface FormButtonProps {
     loading: Boolean;
     setOpenModal: Dispatch<SetStateAction<boolean>>
 }

 const FormButton = ({loading, setOpenModal}: FormButtonProps) => (
     <div className='flex w-full justify-center gap-4'>
       <button type='submit' /*disabled={loading}*/>
          {loading ? (
           <ReactLoading type='spin' height={30} width={30} color='blue' />
         ) : (
           'Crear'
         )} 
       </button>
       <button
         type='button'
         //disabled={loading}
         onClick={() => setOpenModal(false)}
         className='secondary'
       >
         Cancelar
       </button>
     </div>
   );

 export { FormButton };