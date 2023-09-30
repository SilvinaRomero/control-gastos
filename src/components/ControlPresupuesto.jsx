import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Swal from 'sweetalert2'

const ControlPresupuesto = ({
    gastos,
    SetGastos,
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(() => {
        // reduce recibe dos argumenteos, el acumulado y el objeto  de cada iteracion del array
        const totalGastado = gastos.reduce((acumulado, gasto) => gasto.cantidad + acumulado, 0)
        const totalDisponible = presupuesto - totalGastado;

        // Calcular el porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)

        setPorcentaje(nuevoPorcentaje)

        setDisponible(totalDisponible)
        setGastado(totalGastado)


    }, [gastos])

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const handleResetearApp = () => {
        const blurBackground = document.getElementById('blur-background');
    
        blurBackground.style.display = 'block';
    
        Swal.fire({
            title: 'Desea eliminar todo el presupuesto?',
            text: "Esta acción es irreversible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, deseo eliminarlo.',
            padding:'3rem'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Presupuesto eliminado!',
                    'La Aplicación se está iniciando',
                    'success'
                );
    
                setTimeout(() => {
                    SetGastos([]);
                    setPresupuesto(0);
                    setIsValidPresupuesto(false);
    
                    // Eliminar el desenfoque al fondo
                    blurBackground.style.display = 'none';
                }, 2500);
            } else {
                // En caso de que el usuario cancele, también elimina el desenfoque.
                blurBackground.style.display = 'none';
            }
        });
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#DC2626' : '#3b82f6',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje > 100 ? '#DC2626' : '#3b82f6',
                        pathTransitionDuration: 2,
                    })}

                />
            </div>
            <div className="contenido-presupuesto">
                <button
                    className="reset-app"
                    onClick={handleResetearApp}
                >
                    Resetar App
                </button>
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span>
                    <span className={disponible < 0 ? 'negativo' : 'content'}>{formatearCantidad(disponible)}</span>
                </p>
                <p>
                    <span>Gastado: </span>{formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto
