import { useState, useEffect } from 'react'

const Filtros = ({filtro,setFiltro}) => {


    return (
        <div className='filtros sombra contenedor'>
            <form>
                <div className='campo'>
                    <label htmlFor="filtro">Filtrar Gastos</label>
                    <select 
                        name="filtro" 
                        id="filtro"
                        value={filtro}
                        onChange={e => setFiltro(e.target.value)}
                    >
                        <option value="">--- Todas las categorías ---</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="alimentos">Alimentos</option>
                        <option value="hogar">Hogar</option>
                        <option value="varios">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros
