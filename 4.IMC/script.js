let massa = document.getElementById('massa')
let altura = document.getElementById('altura')
let calcular = document.getElementById('calcular')
let resultado = document.getElementById('resultado')
let clas = document.getElementById('classificacao')
let limpar = document.getElementById('limpar')

calcular.addEventListener('click', function(){
    const mas = Number(massa.value)
    const alt = Number(altura.value)
    let imc = mas / (alt * alt)
    resultado.innerText = imc.toFixed(2)
    if(imc < 18.5){
        clas.innerText = 'Magro'
    } else if(imc >= 18.5 && imc < 25){
        clas.innerText = 'Normal'
    } else if(imc >= 25 && imc < 30){
        clas.innerText = 'Sobrepeso'
    } else if(imc >= 30 && imc < 40){
        clas.innerText = 'Obesidade'
    } else if(imc > 40){
        clas.innerText = 'Obesidade grave'
    }
})

limpar.addEventListener('click', function(){
    massa.value = ''
    altura.value = ''
    resultado.innerText = ''
    clas.innerText = ''
})