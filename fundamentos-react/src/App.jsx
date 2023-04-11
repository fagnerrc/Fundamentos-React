import React from 'react'
import Primeiro from './Basicos/primeiro'
import CompParametro from './Basicos/CompParametro'
import Sorteio from './Basicos/Sorteio'
import Card from './componentes/Layout/card'
import Sorteio2 from './Basicos/Sorteio2'

export default _ =>
    <div className='fg'>
        <h1>Fundamentos React</h1>
        <div className='principal'>
        <Card titulo="Desafio Aleatório2" color="#FF5703">
                <Sorteio2 max={10} min={1}/>
            </Card>
            <Card titulo="Desafio Aleatório" color="#FF5733">
                <Sorteio nun1={10} nun2={50} />
            </Card>

            <Card titulo="Olá Mundo"  color="#800080">
                <CompParametro titulo="Olá Mundo " sub="AFFF"></CompParametro>
            </Card>

            <Card titulo="Olá Mundo">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
