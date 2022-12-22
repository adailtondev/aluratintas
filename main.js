const botao = document.querySelector("#botao")
const lista = document.querySelector('.lista')

lista.hidden=true;

//Função que mostra e esconde as tintas//
botao.addEventListener('click', () => {
    botao.innerText = (lista.hidden)? 'Esconder':'Aluratintas em estoque:'
    lista.hidden = !lista.hidden
  })