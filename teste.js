// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

// function replaceBgColor(){
//     const bg = document.body
//     setInterval(() =>{
//         bg.style.background = 'red'
//     }, 2000)
//     setInterval(() =>{
//         bg.style.background = 'blue'
//     }, 3000)
// }

// replaceBgColor()

const btnIniciar = document.querySelector('[data-iniciar]')
const btnParar = document.querySelector('[data-parar]')
const tempo = document.querySelector('[data-cronometro]')

btnIniciar.addEventListener('click', initCronometro)
btnParar.addEventListener('click', stopCronometro)
btnParar.addEventListener('dblclick', resetCronometro)

let i = 0;
let timer;

function initCronometro() {
    timer = setInterval(() => {
        tempo.innerText = i++
    }, 100)
    btnIniciar.setAttribute('disabled', '')
}

function stopCronometro() {
    clearInterval(timer)
    btnIniciar.removeAttribute('disabled')
}

function resetCronometro() {
    i = 0
    tempo.innerText = 0
}


