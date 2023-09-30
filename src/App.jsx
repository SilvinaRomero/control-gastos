import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import { generarId } from './helpers';

function App() {
	// creamos state para presupuesto
	const [gastos, SetGastos] = useState([]);
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
	const [modal, SetModal] = useState(false);
	const [animarMmodal, SetAnimarModal] = useState(false);
	const [gastoEditar, setGastoEditar] = useState({})

	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			SetModal(true);
			setTimeout(() => {
				SetAnimarModal(true)
			}, 500);


		}
	}, [gastoEditar])

	const handleNuevoGasto = () => {
		setGastoEditar({});
		// window.scroll(0,0)
		SetModal(true);

		setTimeout(() => {
			SetAnimarModal(true)
		}, 500);

	}

	const guardarGasto = gasto => {
		if (gasto.id) {
			// actualizargastoState//map genera un nuevo array
			const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
			SetGastos(gastosActualizados)
			setGastoEditar({});
		} else {
			// nuevo
			gasto.id = generarId();
			gasto.fecha = Date.now();
			SetGastos([...gastos, gasto]);
		}

		SetAnimarModal(false)
		setTimeout(() => {
			SetModal(false)
		}, 500);
	}

	const eliminarGasto = id => {
		const gastosActualizado = gastos.filter(gastoState => gastoState.id !== id);
		SetGastos(gastosActualizado);
	}


	return (
		<div className={modal ? 'fijar' : ''}>
			<Header
				gastos={gastos}
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidPresupuesto={isValidPresupuesto}
				setIsValidPresupuesto={setIsValidPresupuesto}
			/>
			{isValidPresupuesto && (
				<>
					<main>
						<ListadoGastos
							gastos={gastos}
							setGastoEditar={setGastoEditar}
							eliminarGasto={eliminarGasto}
						/>
					</main>
					<div className='nuevo-gasto'>
						<img
							src={IconoNuevoGasto}
							alt="icono nuevo gasto"
							onClick={handleNuevoGasto}
						/>
					</div>
				</>
			)}

			{modal &&
				<Modal
					SetModal={SetModal}
					animarMmodal={animarMmodal}
					SetAnimarModal={SetAnimarModal}
					guardarGasto={guardarGasto}
					gastoEditar={gastoEditar}
					setGastoEditar={setGastoEditar}
				/>
			}

		</div>
	)
}

export default App
