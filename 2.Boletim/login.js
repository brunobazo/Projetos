const nameForm = document.getElementById('name-form')
const welcomeContainer = document.getElementById('conteudo')
const logoutBtn = document.getElementById('logout')

function checkUser(){
    const userName = localStorage.getItem('name')
    const escola = localStorage.getItem('escola')
    if(userName){
        nameForm.style.display = 'none'
        welcomeContainer.style.display = 'block'
    } else {
        nameForm.style.display = 'block'
        welcomeContainer.style.display = 'none'
    }
    const userNameElement = document.getElementById('username')
    userNameElement.textContent = userName
    const escolaDoc = document.getElementById('escolaBoletim')
    escolaDoc.textContent = escola
}
nameForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nameInput = document.querySelector('#name')
    localStorage.setItem('name', nameInput.value)
    const escolaInput = document.querySelector('#escola')
    localStorage.setItem('escola', escolaInput.value)
})
function sair(){
    localStorage.removeItem('name')
    checkUser()
}
checkUser()