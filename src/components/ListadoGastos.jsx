import Gasto from "./Gasto"

const ListadoGastos = ({ gastos,setGastoEditar,eliminarGasto }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>{gastos.length ? (

                gastos.map(gasto => (
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto={eliminarGasto}
                    />
                ))

            ) : 'No hay gastos aún'}</h2>


        </div>
    )
}

export default ListadoGastos
