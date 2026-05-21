
// function nomeDaFuncao () {
//    bloco de execução
// }

//para executar a função precisa chamar

// nomeDaFuncao()

// prompt() // input
// alert() // output
// confirm() // input
// console.log() // output
// Number() //conversor em Número
// String() //conversor em Texto
// parseInt() //conversor em Inteiro
// parseFloat() //conversor em Numero flutuante (com decimal)
//toFixed(2) //fixa o número de casas decimais

// função sem parâmetro e sem retorno
function dizerOi () {
  alert("Olá, boa noite!")
}

dizerOi()

//função com parâmetro
function soma (num1, num2) {
  let resultado = num1 + num2
  console.log(resultado)
}

soma(10,5)


//função com retorno
console.log("resultado:", subtracao(20,10))
function subtracao (num1, num2){
  let resultado = num1 - num2
  return resultado
}


//função tipo "arrow function"
//hoisting - funcão do tipo function que o arquivo consegue identificar a função antes da declaração 
const multiplicacao = (num1,num2) => {
  let resultado = num1 * num2
  return resultado
}

console.log(multiplicacao(3,3))

//função de callback

const frutas = ["Banana", "Maçã", "Pêra", "Mamão", "Banana"] //array -> Lista

const filtroFrutas = frutas.filter((item)=> {
  return item === "Banana"
})

console.log(filtroFrutas)

