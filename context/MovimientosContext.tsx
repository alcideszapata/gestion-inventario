 import React, { 
     Dispatch, 
     SetStateAction, 
     createContext, 
     useContext, 
     useState, 
 } from 'react';

 interface MovimientosContextProps {
     openModalEntradas: boolean;
     setOpenModalEntradas: Dispatch<SetStateAction<boolean>>;
     openModalSalidas: boolean;
     setOpenModalSalidas: Dispatch<SetStateAction<boolean>>;
     openModalEditarUsuarios: boolean;
     setOpenModalEditarUsuarios: Dispatch<SetStateAction<boolean>>;
     openModalAgregarMateriales: boolean;
     setOpenModalAgregarMateriales: Dispatch<SetStateAction<boolean>>
 }

 const MovimientosContext = createContext<MovimientosContextProps>(
     {} as MovimientosContextProps
 ); 

 export const useMovimientosContext = () => useContext(MovimientosContext);

 interface MovimientosContextProviderProps {
     children: JSX.Element;
 }

 const MovimientosContextProvider = ({
     children,
 }:MovimientosContextProviderProps) => {
  const [openModalEntradas, setOpenModalEntradas] = useState<boolean>(false);
  const [openModalSalidas, setOpenModalSalidas] = useState<boolean>(false);
  const [openModalEditarUsuarios, setOpenModalEditarUsuarios] = useState<boolean>(false);
  const [openModalAgregarMateriales, setOpenModalAgregarMateriales] = useState<boolean>(false);
 return (
    <MovimientosContext.Provider
        value={{
            openModalEntradas,
            setOpenModalEntradas,
            openModalSalidas,
            setOpenModalSalidas,
            openModalEditarUsuarios,
            setOpenModalEditarUsuarios,
            openModalAgregarMateriales, 
            setOpenModalAgregarMateriales
        }}
    >
        {children}
    </MovimientosContext.Provider>
  );
 };
 export { MovimientosContextProvider };