const tasksContainer = document.getElementById('tasksContainer');

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( elemen => {
        elemen.classList.contains('done') ? done.push(elemen) : toDo.push(elemen)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(elemen => tasksContainer.appendChild(elemen))
}