import Gasto from "./Gasto"
import { formatearCantidad } from "../helpers"

const ListadoGastos = ({
    gastos,
    setGastoEditar,
    eliminarGasto,
    filtro,
    gastosFiltrados
}) => {
    const capitalize = (str) => {
        if (str == 'varios') {
            return 'Gastos Varios'
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const calcularSubtotal = () => {
        if (gastosFiltrados.length > 0) {
            const subTotal = gastosFiltrados.reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0);
            return formatearCantidad(subTotal)
        }
    }

    return (
        <div className="listado-gastos contenedor">
            {/* // saber si hay un filtro, si no vamos a iterar sobre todos los gastos */}
            {
                filtro ? (
                    <>
                        <h2>{gastosFiltrados.length ? `Gastos de la categoría  ${capitalize(filtro)} (${gastosFiltrados.length})` : `No hay gastos en la categoría  ${capitalize(filtro)}`}</h2>
                        {gastosFiltrados.length ? (
                            <div className="descripcion-gasto">
                                <p className="subtotal">
                                    Subtotal: {''}
                                    <span>{calcularSubtotal()}</span>
                                </p>

                            </div>

                        ) : ('')}


                        {gastosFiltrados.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
                        {gastos.map(gasto => (
                            <Gasto
                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}
                            />
                        ))}
                    </>
                )
            }





        </div>
    )
}

export default ListadoGastos
