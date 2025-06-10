// definir constantes para o uso do código
const btnAdd = document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList')
const titulo = document.getElementById('titulo')

let nome = prompt("Qual o seu nome?")
titulo.innerHTML = `Lista de tarefas: ${nome}`;
// acompanha o evento de clique do botão adicionar tarefa
btnAdd.addEventListener("click", criarTarefa)
function criarTarefa() {
    
}