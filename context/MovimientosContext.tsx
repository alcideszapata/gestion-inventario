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
 return (
    <MovimientosContext.Provider
        value={{
            openModalEntradas,
            setOpenModalEntradas,
            openModalSalidas,
            setOpenModalSalidas,
        }}
    >
        {children}
    </MovimientosContext.Provider>
 );
 };
 export { MovimientosContextProvider };