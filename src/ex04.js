/*4. Escreva um script que apresenta as seguintes operações para o usuário:
1- Soma
2- Subtração
3-Multiplicação
4- Divisão
5- Sair
O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
o objeto JSON do exercício 4 para realizar as operações aritméticas.*/

const prompt = require("prompt-sync")();

function calc() {
    const f = {
        soma: (x,y) => x+y,
        subtracao: (x,y) => x-y,
        multiplicacao: (x,y) => x*y,
        divisao: (x,y) => x/y
    };
    let opt = 0
    do{
        console.log("Operações Aritméticas.\n", "Pressione 1 para somar\n",
        "Pressione 2 para subtrair\n", "Pressione 3 para multiplicar\n", 
        "Pressione 4 para dividir\n", "Pressione 5 para sair\n")
        opt = prompt("Qual operação deseja realizar?\n")
        Number(opt)
        switch(opt){
            case "1":
                let aSom = prompt("Digite o primeiro valor: ")
                let bSom = prompt("Digite o segundo valor: ")
                console.log("\nSoma = " + f.soma(Number(aSom),Number(bSom)) + "\n")
                break
            case "2":
                let aSub = prompt("Digite o primeiro valor: ")
                let bSub = prompt("Digite o segundo valor: ")
                console.log("\nSubtração = " + f.subtracao(Number(aSub),Number(bSub)) + "\n")
                break
            case "3":
                let aMult = prompt("Digite o primeiro valor: ")
                let bMult = prompt("Digite o segundo valor: ")
                console.log("\nMultiplicação = " + f.multiplicacao(Number(aMult),Number(bMult)) + "\n")
                break
            case "4":
                let aDiv = prompt("Digite o primeiro valor: ")
                let bDiv = prompt("Digite o segundo valor: ")
                console.log("\nDivisão = " + f.divisao(Number(aDiv),Number(bDiv)) + "\n")
                break
            case "5":
                console.log("\nObrigado por utilizar as funções aritméticas!\n")
                break
            default:
                console.log("\nOpção inválida.\nTente novamente, por favor.\n")
        }
    }while(opt !== "5")
}
calc()