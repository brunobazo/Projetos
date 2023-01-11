const home = document.getElementById('home')
const gramado = document.getElementById('gramado')
const londrina = document.getElementById('londrina')
const guarapuava = document.getElementById('guarapuava')
const ubirata = document.getElementById('ubirata')
const fozIguaçu = document.getElementById('fozIguaçu')
const camburiu = document.getElementById('camburiu')

const textoHome = document.getElementById('textoHome')
const textoGramado = document.getElementById('textoGramado')
const textoLondrina = document.getElementById('textoLondrina')
const textoGuarapuava = document.getElementById('textoGuarapuava')
const textoUbirata = document.getElementById('textoUbirata')
const textoFozIguaçu = document.getElementById('textoFozIguaçu')
const textoCamburiu = document.getElementById('textoCamburiu')

textoHome.style.display = 'block'
textoGramado.style.display = 'none'
textoLondrina.style.display = 'none'
textoGuarapuava.style.display = 'none'
textoUbirata.style.display = 'none'
textoFozIguaçu.style.display = 'none'
textoCamburiu.style.display = 'none'

home.addEventListener('click', function(){
    textoHome.style.display = 'block'
    textoGramado.style.display = 'none'
    textoLondrina.style.display = 'none'
    textoGuarapuava.style.display = 'none'
    textoUbirata.style.display = 'none'
    textoFozIguaçu.style.display = 'none'
    textoCamburiu.style.display = 'none'
})
gramado.addEventListener('click', function(){
    textoHome.style.display = 'none'
    textoGramado.style.display = 'block'
    textoLondrina.style.display = 'none'
    textoGuarapuava.style.display = 'none'
    textoUbirata.style.display = 'none'
    textoFozIguaçu.style.display = 'none'
    textoCamburiu.style.display = 'none'
})
londrina.addEventListener('click', function(){
    textoHome.style.display = 'none'
    textoGramado.style.display = 'none'
    textoLondrina.style.display = 'block'
    textoGuarapuava.style.display = 'none'
    textoUbirata.style.display = 'none'
    textoFozIguaçu.style.display = 'none'
    textoCamburiu.style.display = 'none'
})
guarapuava.addEventListener('click', function(){
    textoHome.style.display = 'none'
    textoGramado.style.display = 'none'
    textoLondrina.style.display = 'none'
    textoGuarapuava.style.display = 'block'
    textoUbirata.style.display = 'none'
    textoFozIguaçu.style.display = 'none'
    textoCamburiu.style.display = 'none'
})
ubirata.addEventListener('click', function(){
    textoHome.style.display = 'none'
    textoGramado.style.display = 'none'
    textoLondrina.style.display = 'none'
    textoGuarapuava.style.display = 'none'
    textoUbirata.style.display = 'block'
    textoFozIguaçu.style.display = 'none'
    textoCamburiu.style.display = 'none'
})
fozIguaçu.addEventListener('click', function(){
    textoHome.style.display = 'none'
    textoGramado.style.display = 'none'
    textoLondrina.style.display = 'none'
    textoGuarapuava.style.display = 'none'
    textoUbirata.style.display = 'none'
    textoFozIguaçu.style.display = 'block'
    textoCamburiu.style.display = 'none'
})
camburiu.addEventListener('click', function(){
    textoHome.style.display = 'none'
    textoGramado.style.display = 'none'
    textoLondrina.style.display = 'none'
    textoGuarapuava.style.display = 'none'
    textoUbirata.style.display = 'none'
    textoFozIguaçu.style.display = 'none'
    textoCamburiu.style.display = 'block'
})