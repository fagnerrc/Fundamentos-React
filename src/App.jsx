import React from 'react'
import Primeiro from './Basicos/primeiro'
import CompParametro from './Basicos/CompParametro'
import Sorteio from './Basicos/Sorteio'
import Card from './componentes/Layout/card'
import Sorteio2 from './Basicos/Sorteio2'
import Familia from './Basicos/Familia'
import ListaAlunos from './Repeticao/ListaAlunos'
import Membro from './Basicos/Membro'
import TabalaProdutos from './Repeticao/TabalaProdutos'
import ParOuImpar from './Condicional/ParOuImpar'

export default _ =>
    <div className='fg'>
        <h1>Fundamentos React :) </h1>
        <div className='principal'>
        <Card titulo="Par ou Impar" color="#00FFFF">
                <ParOuImpar numero={5}> </ParOuImpar>
            </Card>

        <Card titulo="Tabela Produtos" color="#00FF7F">
                <TabalaProdutos></TabalaProdutos>
            </Card>
            <Card titulo="Lista Alunos" color="#B8860B">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="Componente com Filho" color="#FA8072">
                <Familia sobrenome="Cangussu">
                    <Membro nome="Fagner"></Membro>
                    <Membro nome="Junior"></Membro>
                    <Membro nome="Katarina"></Membro>
                    <Membro nome="Wilma"></Membro>
                </Familia>
                
            </Card>
            <Card titulo="Desafio Aleatório2" color="#32CD32">
                <Sorteio2 max={10} min={1} />
            </Card>
            <Card titulo="Desafio Aleatório" color="#FF5733">
                <Sorteio nun1={10} nun2={50} />
            </Card>

            <Card titulo="Olá Mundo" color="#800080">
                <CompParametro titulo="Olá Mundo " sub="AFFF"></CompParametro>
            </Card>

            <Card titulo="Olá Mundo">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
