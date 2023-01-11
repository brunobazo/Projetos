const nota = document.getElementById('notaNum')
const botao = document.getElementById('enviar')
const notas1tri = document.querySelector('.primeiroTri')
const notas2tri = document.querySelector('.segundoTri')
const notas3tri = document.querySelector('.terceiroTri')
const media = document.querySelector('#notaFinal')
const caixa = document.getElementById("caixa")
let contador = 0
let contador2 = 0
let contador3 = 0
let contador4 = 0
let contador5 = 1


function enviaNota(){
    numeroValido()
    const criap = document.createElement("p")
    criap.innerHTML = Number(nota.value)
    criap.id = 'caixa'
    contador++
    criap.className = `tri1${contador}`
    if (contador > 14){
        enviaNota2tri();
        criap.innerHTML = null
        criap.id = null
    } else{
        notas1tri.appendChild(criap)
    }
}
function enviaNota2tri(){
    const criap2 = document.createElement("p")
    criap2.innerHTML = Number(nota.value)
    criap2.id = 'caixa'
    contador2++
    criap2.className = `tri2${contador2}`
    if (contador2 > 14){
        enviaNota3tri();
        criap2.innerHTML = null
        criap2.id = null
    } else {
        notas2tri.appendChild(criap2)
    }
}
function enviaNota3tri(){
    const criap3 = document.createElement("p")
    criap3.innerHTML = Number(nota.value)
    criap3.id = 'caixa'
    contador3++
    criap3.className = `tri3${contador3}`
    if (contador3 > 14){
        criap3.innerHTML = null
        criap3.id = null
    } else {
        notas3tri.appendChild(criap3)
    }
}
function numeroValido(){
    const umTriNum = (Number(nota.value))
    if (umTriNum < 0 || umTriNum > 100){
        alert('Numero invalido!')
        criap.innerHTML = null
    } 
}
function calculaMedia() {
    const media1tri = document.querySelector(`.tri1${contador5}`)
    const media2tri = document.querySelector(`.tri2${contador5}`)
    const media3tri = document.querySelector(`.tri3${contador5}`)
    const criam = document.createElement("p")
    const media1 = Number(media1tri.innerHTML)
    const media2 = Number(media2tri.innerHTML)
    const media3 = Number(media3tri.innerHTML)
    criam.id = 'caixa'
    contador4++
    contador5++
    criam.className = `media${contador4}`
    criam.innerHTML = Number((media1 + media2 + media3) / 3).toFixed(1)
    if (contador4 > 14){
        criam.innerHTML = null
        criam.id = null
    } else {
        media.appendChild(criam)
    }
}