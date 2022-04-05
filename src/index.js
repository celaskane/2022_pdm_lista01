import React from 'react'
import ReactDOM from 'react-dom'
import * as funcoes from './ex02'

const App = () => {
    const f = {
        soma: funcoes.Soma(),
        subtracao: funcoes.Sub(),
        multiplicacao: funcoes.Mult(),
        divisao: funcoes.Div()
    }
    
    return(
        <div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)