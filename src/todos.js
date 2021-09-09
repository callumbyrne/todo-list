import { currentProject } from './projects';
import { Todo } from './factory';

const todoList = document.querySelector('#todos');

const newTodo = (e) => {
    e.preventDefault();

    const status = 0;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;

    const todo = Todo(status, title, description, date, priority);
    //pushes the todo to the current project selected from the projects js
    currentProject.push(todo);
    console.log(currentProject);
    document.querySelector('#todoForm').reset();
    renderTodo(todo);
    closeForm(e);
};

const renderTodo = (todo, index = currentProject.length - 1) => {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo');
    todoContainer.setAttribute('data-todo', index);
    const todoStatus = document.createElement('div');
    todoStatus.setAttribute('id', `status-${index}`);
    todoStatus.innerHTML = (todo.status === 0) ? '<i class="far fa-square"></i>' : '<i class="far fa-check-square"></i>';
    const todoTitle = document.createElement('div');
    todoTitle.innerText = todo.title;
    const todoDescription = document.createElement('div');
    todoDescription.innerText = todo.description;
    const todoDate = document.createElement('div');
    todoDate.innerText = todo.date || 'No Date';
    const todoPriority = document.createElement('div');
    todoPriority.innerText = todo.priority;
    const todoDelete = document.createElement('div');
    todoDelete.setAttribute('id', `delete-${index}`)
    todoDelete.innerHTML = `<i class="fas fa-trash-alt"></i>`;

    todoContainer.append(todoStatus, todoTitle, todoDescription, todoDate, todoPriority, todoDelete);
    todoList.append(todoContainer);

    document.getElementById(`delete-${index}`).addEventListener('click', deleteTodo);
    document.getElementById(`status-${index}`).addEventListener('click', changeStatus);
};

const openForm = () => {
    const newTodo = document.querySelector('.newTodo');
    newTodo.style.display = 'none';
    const formBody = document.querySelector('.form-body');
    formBody.style.display = 'block';
};

const closeForm = (e) => {
    e.preventDefault();
    const formBody = document.querySelector('.form-body');
    formBody.style.display = 'none';
    const newTodo = document.querySelector('.newTodo');
    newTodo.style.display = 'block';
};

const deleteTodo = (e) => {
    const todoIndex = e.path[2].dataset.todo;
    // const todo = document.querySelector(`[data-todo='${todoIndex}']`);
    // todoList.removeChild(todo);
    currentProject.splice(todoIndex, 1);
    removeAllTodos();
    renderAllTodos(currentProject);
}

const changeStatus = (e) => {
    const todoIndex = e.path[2].dataset.todo;
    const targetedTodo = document.getElementById(`status-${todoIndex}`);
    if (targetedTodo.innerHTML == '<i class="far fa-square" aria-hidden="true"></i>') {
        currentProject[todoIndex].status = 1;
        return targetedTodo.innerHTML = '<i class="far fa-check-square"></i>';
    } else {
        currentProject[todoIndex].status = 0;
        return targetedTodo.innerHTML = '<i class="far fa-square"></i>';
    };
};

const removeAllTodos = () => {
    const todos = document.getElementsByClassName('todo');
    while (todos[0]) {
        todos[0].parentNode.removeChild(todos[0]);
    };
};

const renderAllTodos = (currentProject) => {
    if (currentProject.length > 1) {
        for (let i = 1; i < currentProject.length; i++) {
            renderTodo(currentProject[i], i);
        };
    } else {
        return;
    };
};

export { newTodo, openForm, closeForm, removeAllTodos, renderTodo, renderAllTodos };