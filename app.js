const appContainer = document.querySelector('.app');
const inputTarefa = document.querySelector('#inputTarefa');
const btnAdd = document.querySelector('#btnAdd');
const tarefaDiv = document.querySelector('.tarefa-wrapper');
const saidaTexto = document.querySelector('.saida');
let limite = 5;
const Arraytarefas = [];


appContainer.classList.remove('erro');

/* FUNÇÃO DO BOTÃO ADICIONAR*/

function adicionarTarefa() {
    if (inputTarefa.value == 0) {
        saidaTexto.innerHTML = "Você precisa digitar o nome da tarefa que quer  adicionar!";
        appContainer.classList.add('erro');
    } else if (Arraytarefas.length < limite) {
        appContainer.classList.remove('erro');
        saidaTexto.innerHTML="";
        criarElemento('li', tarefaDiv);
        deletarTarefa();
        inputTarefa.value = '';
        inputTarefa.focus();
        console.log(Arraytarefas.length);
        saidaTexto.innerHTML = `<span class="saida" style="color: green;">${Arraytarefas.length} / ${limite}</span>`
    } else if (Arraytarefas.length >= limite && !appContainer.classList.contains('erro')) {
        appContainer.classList.add('erro');
        saidaTexto.innerHTML =  `<span class="saida" style="color: rgb(190, 25, 25);">Seu to-do list está cheio... =( </span>`
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
    novoElemento.classList.add('tarefa-item')
    novoElemento.innerHTML = `${inputTarefa.value}`
    elementoPai.appendChild(novoElemento);
    criarBotao(novoElemento);
    Arraytarefas.push(novoElemento);
    novoElemento.classList.add('adicionado')

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
        botao.addEventListener('click', (e) => {
            lista[index].classList.add('remove')
            setTimeout(() => {
                lista[index].remove();
                Arraytarefas.splice(index);
            }, 200)

        });
    })
}


btnAdd.addEventListener('click', adicionarTarefa);
window.addEventListener('keypress', adicionarComEnter);