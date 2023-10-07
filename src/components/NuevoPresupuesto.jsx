import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {

    const [mensaje, setMensaje] = useState('');


    useEffect(() => {
        if (isNaN(presupuesto)) {
            document.querySelector(".nuevo-presupuesto").value = 0;
            setMensaje('Escriba una cantidad númerica')
            setTimeout(() => {
                cleanMessage()
            }, 1000);
        } else {
            setPresupuesto(document.querySelector(".nuevo-presupuesto").value)
        }
    }, [presupuesto])

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if (!presupuesto || presupuesto < 0) {
            setMensaje('No es un presupuesto válido')
            return
        }
        setMensaje('');
        setIsValidPresupuesto(true)

    }
    const cleanMessage = () => {

        setTimeout(() => {
            setMensaje('')
        }, 500);
    }


    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input
                        type="text"
                        className="nuevo-presupuesto"
                        placeholder="Añade tu Presupuesto"
                        value={presupuesto}
                        min={0}
                        onChange={e => setPresupuesto(e.target.value)}
                    />
                    <input type="submit" value="Añadir" />
                    {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                </div>
            </form>
        </div>
    )
}

export default NuevoPresupuesto
