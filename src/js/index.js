const botao = document.getElementById('botao')
const idTitulo = document.getElementById('idTituloConselho')
const campoConselho = document.getElementById('conselho')

async function geradorDeConselhos(){
    const resposta = await fetch("https://api.adviceslip.com/advice")
    const json = await resposta.json()
    const conselho = json.slip.advice
    const idConselho = json.slip.id
    idTitulo.innerHTML = `"a d v i c e #${idConselho}"`
    campoConselho.innerHTML = `"${conselho}"`
}

botao.addEventListener('click', () => {
    geradorDeConselhos()
})

geradorDeConselhos()