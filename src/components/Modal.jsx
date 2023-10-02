import { useState, useEffect } from 'react'
import CerrarBtm from '../img/cerrar.svg'
import Mensaje from './Mensaje';

const Modal = ({
    SetModal,
    animarMmodal,
    SetAnimarModal,
    guardarGasto,
    gastoEditar,
    setGastoEditar
}) => {

    const [mensaje, setMensaje] = useState('');

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [id, setId] = useState('');
    const [fecha, setFecha] = useState('');

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre);
            setCantidad(gastoEditar.cantidad);
            setCategoria(gastoEditar.categoria);
            setId(gastoEditar.id);
            setFecha(gastoEditar.fecha);
        }
    }, [])

    useEffect(()=>{
        if (isNaN(cantidad)) {
            document.querySelector("#cantidad").value = 0;
            setMensaje('Escriba una cantidad númerica')
            setTimeout(() => {
                cleanMessage()
            }, 1000);
        }else{
            if (Object.keys(gastoEditar).length > 0) {
                document.querySelector("#cantidad").value=gastoEditar.cantidad;
            }else{
                setCantidad(document.querySelector("#cantidad").value)
            }
        }
    },[cantidad])

    const ocultarModal = () => {
        SetAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            SetModal(false)
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios');

            return
        }
        guardarGasto({ nombre, cantidad, categoria, id, fecha });
    }

    const cleanMessage = () => {

        setTimeout(() => {
            setMensaje('')
        }, 500);
    }


    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtm}
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>
            <form className={`formulario ${animarMmodal ? "animar" : "cerrar"}`} onSubmit={handleSubmit}>
                <legend>{gastoEditar.id ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Añade el nombre de Gasto'
                        value={nombre}
                        onChange={e => { setNombre(e.target.value); cleanMessage() }}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="text"
                        placeholder='Añade la cantidad del gasto; en. 300'
                        value={cantidad}
                        onChange={e => { setCantidad(e.target.value) }}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoría</label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={e => { setCategoria(e.target.value); cleanMessage() }}
                    >
                        <option value="">--- Seleccione ---</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="alimentos">Alimentos</option>
                        <option value="hogar">Hogar</option>
                        <option value="varios">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value={gastoEditar.id ? 'Editar Gasto' : 'Añadir Gasto'} />
            </form>
        </div>
    )
}

export default Modal
