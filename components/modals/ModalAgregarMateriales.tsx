import { useMovimientosContext } from '@context/MovimientosContext';
import React, { useState } from 'react';
import { Modal } from './Modal';
import {useMutation} from "@apollo/client";
import {CREATE_MATERIALES} from "../../grahpql/client/material";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalAgregarMateriales = () => {
    const { openModalAgregarMateriales, setOpenModalAgregarMateriales } = useMovimientosContext();
    const [material, setMaterial] = useState('');
    const [saldo, setSaldo] = useState(0);
    const [fechaIngreso, setFechaIngreso] = useState('');
    const [excecuteMutation] = useMutation(CREATE_MATERIALES);

    const handleConfirmar = async () => {
        try {
            const result = await excecuteMutation({
                variables: {
                    nombre: material,
                    fechaCreacion: fechaIngreso.toString(),
                    saldo: saldo.toString(),
                },
            });
            if (result && result.data) {
                setOpenModalAgregarMateriales(false);
            }
            // Mostrar un toast de éxito
            toast.success('Operación realizada con éxito');
        } catch (error) {
            console.error(error);

            // Mostrar un toast de error
            toast.error('Se produjo un error. Inténtalo nuevamente.');
        }
    };

    return (
        <Modal title='Agregar Material' open={openModalAgregarMateriales} setOpen={setOpenModalAgregarMateriales}>
            <FormModalAgregarMateriales
                setMaterial={setMaterial}
                setSaldo={setSaldo}
                setFechaIngreso={setFechaIngreso}
                handleConfirmar={handleConfirmar}
            />
        </Modal>
    );
};

const FormModalAgregarMateriales = ({ setMaterial, setSaldo, setFechaIngreso, handleConfirmar }) => {
    const handleMaterialChange = (e) => {
        setMaterial(e.target.value);
    };

    const handleSaldoChange = (e) => {
        setSaldo(Number(e.target.value));
    };

    const handleFechaIngresoChange = (e) => {
        setFechaIngreso(e.target.value);
    };

    return (
        <div>
            <form className='flex flex-col gap-3'>
                <label htmlFor="material">
                    <span>Material</span>
                    <input type='text' name='material' placeholder='material a agregar' onChange={handleMaterialChange} />
                </label>
                <label htmlFor="saldo">
                    <span>Saldo</span>
                    <input type='number' name='saldo' placeholder='0' min={0} onChange={handleSaldoChange} />
                </label>
                <label htmlFor="fechaIngreso">
                    <span>Fecha de ingreso</span>
                    <input type='date' name='fechaIngreso' onChange={handleFechaIngresoChange} />
                </label>
                <div className='flex w-full gap-3 justify-center'>
                    <button type='button' className='secondary' onClick={handleConfirmar}>Confirmar</button>
                </div>
            </form>
        </div>
    );
};

export { ModalAgregarMateriales };
