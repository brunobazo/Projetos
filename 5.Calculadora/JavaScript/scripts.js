var telaAnterior = document.querySelector('#telaAnterior')
var telaAtual = document.querySelector('#telaAtual')
var botoes = document.querySelectorAll('button')
var num = document.querySelector('.numero')
var ope = document.querySelectorAll('.operador')
var igual = document.querySelector('#igual')
var operacao = document.querySelector('#operacao')
var clearAll = document.querySelector('#clearAll')
var clear = document.querySelector('#clear')
var memoria = document.querySelector('#memoria')
var memMais = document.querySelector('#memoriaMais')
var memMenos = document.querySelector('#memoriaMenos')

console.log('O Erro................... que aparece na calculadora, ocorre quando um numero é muito grande')

//Da valor aos botoes
botoes.forEach(element => {
    var bot = element.innerText
    element.addEventListener('click', function(){
        console.log(bot)
        verificaNum(bot)   
    })
});

//Trocar as telas
ope.forEach(element =>{
    //troca os numero
    element.addEventListener('click', function(){
    var tela = telaAtual.innerText
    telaAnterior.innerText = tela
    telaAtual.innerText = ''
    //troca o sinal
    var qualOpe = element.innerText
    operacao.innerText = ' ' + qualOpe
    })
})

//Verifica se o numero é valido
function verificaNum(e){
    var quantosNum = JSON.stringify(telaAtual.innerText)
    if(e != '.' &&  isNaN(e)){
        return
    }else if(
        e == '.' && telaAtual.innerText.includes('.')|| 
        e == '.' && telaAtual.innerText == '' ||
        quantosNum.length > 14){ 
        return
    }else {
        telaAtual.innerText += e
    }
}

//funcionalidade igual
igual.addEventListener('click', function(){
    if(telaAnterior == ''){
        telaAnterior.innerText = '0'
    }
    var sinal = operacao.innerText
    var telAnt = Number(telaAnterior.innerText)
    var telAtu = Number(telaAtual.innerText)
    if(sinal == ' +'){
        var soma = telAnt + telAtu
    } else if(sinal == ' -'){
        var soma = telAnt - telAtu
    } else if(sinal == ' x'){
        var soma = telAnt * telAtu
    } else if(sinal == ' ÷'){
        var soma = telAnt / telAtu
    }
    //verificando se tem virgula para arredondar
    var quantNum = JSON.stringify(soma)
    var decimal = quantNum.indexOf('.')
    if(decimal < 3 && decimal != -1){
        soma = soma.toFixed(5)
    } else if(decimal >= 3 && decimal < 6){
        soma = soma.toFixed(3)
    } else if(decimal >= 6){
        soma = soma
    }
    //Limite de digitos da calculadora
    var numTela = JSON.stringify(soma)
    if(numTela.length > 13) {
        telaAnterior.innerText = 'Erro...................'
        telaAtual.innerText = ''
        operacao.innerText = ''
        console.log(soma)
        console.log(numTela.length)
    } else {
        telaAnterior.innerText = ''
        operacao.innerText = ''
        telaAtual.innerText = soma
        console.log(soma)
    }
})

//Apagar
clear.addEventListener('click', function(){
    telaAtual.innerText = ''
})
clearAll.addEventListener('click', function(){
    telaAnterior.innerText = ''
    telaAtual.innerText = ''
    operacao.innerText = ''
})

//memoria
var memCal = 0
memMais.addEventListener('click', function(){
    memCal += Number(telaAtual.innerText)
})
memMenos.addEventListener('click', function(){
    memCal -= Number(telaAtual.innerText)
})
memoria.addEventListener('click', function(){
    telaAtual.innerText = memCal
    telaAnterior.innerText = ''
    operacao.innerText = ''
})