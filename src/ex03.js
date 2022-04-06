/*3. Crie um objeto JSON que abriga todas as operações do exercício 2.*/

const Soma = (x, y) => x + y
const Sub = (x, y) => x - y
const Mult = (x, y) => x * y
const Div = (x, y) => x / y

const f = {
    soma: Soma(),
    subtracao: Sub(),
    multiplicacao: Mult(),
    divisao: Div()
}

console.log(f.soma)