import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { Children, Dispatch, SetStateAction } from "react"

 interface ModalProps {
    title: string;
    children: JSX.Element;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;

 }

const Modal = ({title, children, open, setOpen } : ModalProps) => {
  return (
    <Dialog open={open} onClose={()=> setOpen(false)} >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children} </DialogContent>
    </Dialog>
  )
}

export {Modal}






// import React, { Dispatch, SetStateAction } from 'react';
// import Dialog from '@mui/material/Dialog';
// import { DialogContent, DialogTitle } from '@mui/material';

// interface ModalProps {
//     open: boolean;
//     setOpen: Dispatch<SetStateAction<boolean>>;
//     modalTitle: string;
//     children: JSX.Element;

// }

// const Modal = ({ open, setOpen, modalTitle, children }: ModalProps) => {
//     return(
//         <Dialog open={open} onClose={() => setOpen(false)}>
//             <DialogTitle>{modalTitle}</DialogTitle>
//             <DialogContent>{children}</DialogContent>
//         </Dialog>
//     );
// };
// export default Modal;