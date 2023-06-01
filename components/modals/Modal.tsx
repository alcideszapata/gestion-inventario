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