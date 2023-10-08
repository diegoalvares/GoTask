const modal = document.getElementById('modal');
const descricao = document.getElementById('descricao');
const data = document.getElementById('data');
const novatarefa = document.getElementById('salvar');
const alertElement = document.getElementById('alert');

novatarefa.addEventListener('click', criartarefa);

function criartarefa(e){
    e.preventDefault();

    if(!descricao.value || !data.value){
        alertElement.style.display = 'block';
        closeAlert();
        return;
    }

    const newTask = {
        description: descricao.value,
        date: new Date(data.value).toLocaleDateString('pt-BR', { timeZone: 'UTC' }),
        id: Math.floor(Math.random()* 10000)
    }

    const allTasks = getTasks();

    setTasks([...allTasks, newTask]);

    reload();

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

function closeAlert(){
    setTimeout(() => {
        alertElement.style.display = 'none';
    }, 3000);
}