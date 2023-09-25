import { formatearFecha } from "../helpers"

import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastosVarios from '../img/icono_gastos.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIcono = {
    ahorro: IconoAhorro,
    alimentos: IconoComida,
    hogar: IconoCasa,
    varios: IconoGastosVarios,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones

}

const Gasto = ({ gasto }) => {

    const { nombre, cantidad, categoria, id, fecha } = gasto


    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img
                    src={diccionarioIcono[categoria]}
                    alt="Icono categoria"
                />
                <div className="descripcion-gasto">
                    <p className="categoria">{categoria}</p>
                    <p className="nombre-gasto">{nombre}</p>
                    <p className="fecha-gasto">
                        Agregado el: {''}
                        <span>{formatearFecha(fecha)}</span>
                    </p>
                </div>
            </div>
            <p className="cantidad-gasto">
                {formatearCantidad(cantidad)}
            </p>
        </div>
    )
}

export default Gasto
