import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { Modal } from "./modals/Modal";
import { ModalEntradas } from "./modals/ModalEntradas";
import { ModalSalidas } from "./modals/ModalSalidas";

// const [openModalEntradas, setOpenModalEntradas] = useState<boolean>(false);
// const [openModalSalidas, setOpenModalSalidas] = useState<boolean>(false);
interface ActionButtonProps {
  setOpenModalEntradas: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalSalidas: React.Dispatch<React.SetStateAction<boolean>>;
}

const ActionButtonM = ({setOpenModalEntradas, setOpenModalSalidas}:ActionButtonProps) => {
  return (
    <div className=" flex gap-3 items-end ">
        <button onClick={() => setOpenModalEntradas(true)}>Agregar Entrada</button>
        <button onClick={() => setOpenModalSalidas(true)}>Agregar Salida</button>
        {/* <ModalEntradas 
          openModalEntradas={openModalEntradas} 
          setOpenModalEntradas={setOpenModalEntradas} 
        />
        <ModalSalidas 
          openModalSalidas={openModalSalidas} 
          setOpenModalSalidas={setOpenModalSalidas} 
        /> */}

    </div>
  )
}

export { ActionButtonM };