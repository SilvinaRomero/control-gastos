import { useEffect,useState } from "react";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ gastos, presupuesto }) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] =useState(0);

    useEffect(() => {
        // reduce recibe dos argumenteos, el acumulado y el objeto  de cada iteracion del array
        const totalGastado = gastos.reduce((acumulado, gasto) => gasto.cantidad + acumulado,0)
        const totalDisponible = presupuesto - totalGastado;

        // Calcular el porcentaje gastado
        const nuevoPorcentaje = (((presupuesto-totalDisponible) / presupuesto) * 100).toFixed(2)

        setPorcentaje(nuevoPorcentaje)

        setDisponible(totalDisponible)
        setGastado(totalGastado)
       
        
    }, [gastos])

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar 
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                    styles={buildStyles({
                        pathColor:'#3b82f6',
                        trailColor:'#F5F5F5',
                        textColor: '#3b82f6',
                        pathTransitionDuration: 2,
                    })}
                    
                />
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span>{formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span>{formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto
