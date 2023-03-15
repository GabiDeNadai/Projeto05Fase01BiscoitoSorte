const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnLuck = document.querySelector("#btnLuck")
const btnReset = document.querySelector("#btnReset")
let yourLuck = document.querySelector(".screen2 p")

const phrases = [
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "Se alguém está tão cansado que não possa te dar sorriso, deixa-lhe o teu.",
  "Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.",
  "Seus sonhos não precisam de plateia, eles só precisam de você.",
  "No meio da dificuldade encontra-se a oportunidade.",
  "Pedras no caminho? Guarde todas. Um dia irá construir um castelo.",
  "Imagine uma nova história para sua vida e acredite nela.",
  "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.",
  "Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez."
];

btnLuck.addEventListener('click', handleLuckClick) //só vai fazer algo quando clicar o botão
btnReset.addEventListener('click', handleResetClick)

function handleLuckClick(event) {
  toggleScreen()
  getPhrase()
  screen2.querySelector("p")
    .innerText = `${yourLuck}`
}

function clickEnter(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

function handleResetClick() {
  toggleScreen()
}

function getPhrase() {
  yourLuck = phrases[Math.floor(Math.random() * phrases.length)]
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}