const inputTarefa = document.querySelector('#inputTarefa');
const btnAdd = document.querySelector('#btnAdd');
const tarefaDiv = document.querySelector('.tarefa-wrapper');
const Arraytarefas = [];


/* FUNÇÃO DO BOTÃO ADICIONAR*/

function adicionarTarefa() {
    if (inputTarefa.value == 0) {
        alert('Você precisa digitar algum valor para continuar');
    } else {
        criarElemento('li', tarefaDiv);
        deletarTarefa();
        inputTarefa.value ='';
        inputTarefa.focus();
        console.log(Arraytarefas);

        
     
    }


}

// ADICIONAR TAREFA CLICANDO NO ENTER
function adicionarComEnter(evento) {
    if (evento.keyCode === 13) {
        adicionarTarefa();
    }
}



/* CRIA UM ELEMENTO E ADICIONA ELE DENTO DE UMA DIV ESPECÍFICA*/

function criarElemento(elemento, elementoPai) {
    const novoElemento = document.createElement(elemento);
    novoElemento.setAttribute('class', 'tarefa-item');
    novoElemento.innerHTML = `${inputTarefa.value}`
    elementoPai.appendChild(novoElemento);
    criarBotao(novoElemento);
    Arraytarefas.push(novoElemento);




}



/* CRIAR BOTÃO DE EXCLUSÃO*/

function criarBotao(elementoPai) {
    const criarBotao = document.createElement('a');
    criarBotao.setAttribute('href', '#');
    criarBotao.setAttribute('class', 'close')
    criarBotao.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;
    elementoPai.appendChild(criarBotao);

}



/* FUNÇÃO DELETAR TASK*/
function deletarTarefa() {
    const btnClose = document.querySelectorAll('.close');
    const lista = document.querySelectorAll('.tarefa-item');
    const titulo = document.querySelector('h1').offsetTop;

  

 
    btnClose.forEach((botao, index) => {
       botao.addEventListener('click', (e)=> {
           lista[index].remove();
            Arraytarefas.splice(index);
        
        });
       
    })
}










btnAdd.addEventListener('click', adicionarTarefa);

window.addEventListener('keypress', adicionarComEnter);