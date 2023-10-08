const modal = document.getElementById('modal');
const descricao = document.getElementById('descricao');
const data = document.getElementById('data');
const novatarefa = document.getElementById('salvar');

novatarefa.addEventListener('click', criartarefa);

function criartarefa(e){
    e.preventDefault();

    if(!descricao.value || !data.value){
        alert('Preencha todos os campos!')
        return;
    }

    const newTask = {
        description: descricao.value,
        date: new Date(data.value).toLocaleDateString('pt-BR', { timeZone: 'UTC' }),
        id: Math.floor(Math.random()* 10000)
    }

    const allTasks = getTasks();

    console.log('All Tasks: ', allTasks)

    localStorage.setItem('@GoTasks', JSON.stringify([ ...allTasks, newTask ]));

    fecharmodal();
}



function abrirmodal(){
    modal.style.display= 'flex';
}

function fecharmodal(){
    modal.style.display= 'none';
    limparcampos();
}

function limparcampos(){
    data.value = '';
    descricao.value= '';
}