const tabela = document.getElementById('tabela');
const mensagem = document.getElementById('carregando');
const contador = document.getElementById('count-tasks');

function contagem(){
    const allTasks = getTasks();
    contador.innerHTML = allTasks.length;
}

function fillTable(){
    const allTasks = getTasks();
    allTasks.forEach(addTask)

    if(allTasks.length === 0){
        mensagem.innerHTML= "Você não tem tarefa!"
    }

    else{
        mensagem.innerHTML= ""
    }

    contagem();
}

function addTask(task){
    const tr = document.createElement('tr')
    tr.innerHTML = innerHTMLTasks(task);

    tabela.appendChild(tr)
}

function innerHTMLTasks(task){
    const html= `
        <td>${task.description}</td>
        <td>${task.date}</td>
        <td>
            <button onclick="removeTask(${task.id})"> Excluir </button>
        </td>
    `;     
    return html;
}

function removeTask(id){
    const allTasks = getTasks();
    const tasksFiltered = allTasks.filter(task => task.id !== id);

    setTasks(tasksFiltered);
    reload()
}

function reload(){
    tabela.innerHTML = '';
    fillTable();
}