import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
	// creamos state para presupuesto
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
	const [modal, SetModal] = useState(false);
	const [animarMmodal, SetAnimarModal] = useState(false);
	const [gastos, SetGastos] = useState([]);
	const [gasto, SetGasto] = useState({})

	const handleNuevoGasto = () => {
		SetModal(true);

		setTimeout(() => {
			SetAnimarModal(true)
		}, 500);
		
	}

	return (
		<div>
			<Header
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidPresupuesto={isValidPresupuesto}
				setIsValidPresupuesto={setIsValidPresupuesto}
			/>
			{isValidPresupuesto && (
				<div className='nuevo-gasto'>
					<img
						src={IconoNuevoGasto}
						alt="icono nuevo gasto"
						onClick={handleNuevoGasto}
					/>
				</div>
			)}

			{modal &&
				<Modal
					SetModal={SetModal}
					animarMmodal={animarMmodal}
					SetAnimarModal={SetAnimarModal}
				/>
			}

		</div>
	)
}

export default App
