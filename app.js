const inputTarefa = document.querySelector('#inputTarefa');
const btnAdd = document.querySelector('#btnAdd');
const tarefaDiv = document.querySelector('.tarefa-wrapper');





const tarefas = []


btnAdd.addEventListener('click', adicionarTarefa)


function adicionarTarefa() {
    const textoTarefa = inputTarefa.value;
    let tarefaItem = document.createElement('div'); // criar uma div
    tarefaItem.classList.add('tarefa-item'); // adiciona classe pra div criada
    tarefaDiv.appendChild(tarefaItem); // adiciona a div criada dentro da div wrapper
    tarefaItem.innerHTML = `<a href="#" class="close"><ion-icon name="close-outline"></ion-icon></a><p> ${textoTarefa}</p>`;
    tarefas.push(textoTarefa); // adicionar string na array
    inputTarefa.value = '';
    inputTarefa.focus();

    for(let i = 0; i < tarefas.length; i++){
        tarefaItem.setAttribute('data-ref', `${i}`)
    }

    function removerTarefa() {
        const icones = document.querySelectorAll('.close');
        const lista = document.querySelectorAll('.tarefa-item');
        console.log(lista.length);
        
        icones.forEach((icone, index) => {
            icone.addEventListener('click', (event) => {
             
            })
        });
    }

    removerTarefa();


}






//adicionarTarefa();