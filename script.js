// definir constantes para o uso do código
const btnAdd = document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList')
const titulo = document.getElementById('titulo')

let nome = prompt("Qual o seu nome?")
tarefa.focus();
titulo.innerHTML = `Lista de tarefas: ${nome}`;
// acompanha o evento de clique do botão adicionar tarefa
btnAdd.addEventListener("click", criarTarefa)

// ENVIO COM O ENTER
tarefa.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') criarTarefa();
});

function criarTarefa() {
    if (tarefa.value==""){
        alert("Digite o nome da sua tarefa: ")
    } else {
    const listItem = document.createElement('li')
    listItem.textContent = tarefa.value;
    taskList.appendChild(listItem);
    
    // criar botão de deletar tarefa
    const removeButton = document.createElement('button');
    removeButton.id = "remove";
    removeButton.textContent = "x"
    listItem.appendChild(removeButton)

    removeButton.addEventListener("click", function(){
        taskList.removeChild(listItem)
    })

    // criar botão de concluir tarefa
    const concluirButton = document.createElement('button');
    concluirButton.id = "conclui";
    concluirButton.textContent = "✓"

    let buttonsItem = document.createElement('div')
    buttonsItem.classList.toggle('buttonsItem')
    listItem.appendChild(buttonsItem)
    buttonsItem.appendChild(concluirButton)
    buttonsItem.appendChild(removeButton)

    concluirButton.addEventListener("click", function(){
        listItem.classList.toggle('completed')
        // concluirButton.style.color = "green"
    })

    // APAGA INPUT APÓS O ENVIO
    tarefa.value = '';
    tarefa.focus(); // retorna o foco para o campo de entrada
    }
}

