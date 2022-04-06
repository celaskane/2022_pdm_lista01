import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
//import * as funcoes from './ex02'

const App = () => {
    /*const f = {
        soma: funcoes.Soma(),
        subtracao: funcoes.Sub(),
        multiplicacao: funcoes.Mult(),
        divisao: funcoes.Div()
    }*/
    
    return(
        <div className="rotulo">
            <label>Primeiro Valor: </label>
            <input id='valores'></input><br/><br/>
            <label>Segundo Valor: </label>
            <input id='valores'></input>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)