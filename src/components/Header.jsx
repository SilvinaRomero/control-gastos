import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({
    gastos,
    SetGastos,
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto
}) => {

    return (
        <header>
            <h1>
                Planificador de gastos
            </h1>
            {isValidPresupuesto ? (
                <>
                    <ControlPresupuesto
                        gastos={gastos}
                        SetGastos={SetGastos}
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                </>


            ) : (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            )}

        </header>
    )
}

export default Header
