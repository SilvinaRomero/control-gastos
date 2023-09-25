import CerrarBtm from '../img/cerrar.svg'

const Modal = ({ SetModal, animarMmodal, SetAnimarModal }) => {

    const ocultarModal = () => {

        SetAnimarModal(false)
        setTimeout(() => {
            SetModal(false)
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
            <form className={`formulario ${animarMmodal ? "animar" : "cerrar"}`}>
                <legend>Nuevo Gasto</legend>
                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Añade el nombre de Gasto'
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="number"
                        placeholder='Añade la cantidad del gasto; en. 300'
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoría</label>
                    <select
                        id="categoria"
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
                <input type="submit" value="Añadir Gasto" />
            </form>
        </div>
    )
}

export default Modal
