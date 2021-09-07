import { currentProject } from './projects';
import { Todo } from './factory';

const todoList = document.querySelector('.todos');
let id = 1;

const newTodo = (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;

    const todo = Todo(title, description, date, priority, id);
    currentProject.push(todo);
    id += 1;
    document.querySelector('#todoForm').reset();
    renderTodo(todo);
    closeForm();
};

const renderTodo = (todo) => {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo');
    todoContainer.setAttribute('data-id', todo.id);
    const todoStatus = document.createElement('div');
    todoStatus.setAttribute('id', `status-${todo.id}`);
    todoStatus.innerHTML = '<i class="far fa-square"></i>'
    const todoTitle = document.createElement('div');
    todoTitle.innerText = todo.title;
    const todoDescription = document.createElement('div');
    todoDescription.innerText = todo.description;
    const todoDate = document.createElement('div');
    todoDate.innerText = todo.date || 'No Date';
    const todoPriority = document.createElement('div');
    todoPriority.innerText = todo.priority;
    const todoDelete = document.createElement('div');
    todoDelete.setAttribute('id', `delete-${todo.id}`)
    todoDelete.innerHTML = `<i class="fas fa-trash-alt"></i>`;

    todoContainer.append(todoStatus, todoTitle, todoDescription, todoDate, todoPriority, todoDelete);
    todoList.append(todoContainer);

    document.getElementById(`delete-${todo.id}`).addEventListener('click', deleteTodo);
    document.getElementById(`status-${todo.id}`).addEventListener('click', changeStatus);
};

const openForm = () => {
    const newTodo = document.querySelector('.newTodo');
    newTodo.style.display = 'none';
    const formBody = document.querySelector('.form-body');
    formBody.style.display = 'block';
};

const closeForm = () => {
    const formBody = document.querySelector('.form-body');
    formBody.style.display = 'none';
    const newTodo = document.querySelector('.newTodo');
    newTodo.style.display = 'block';
};

const deleteTodo = (e) => {
    const todoIndex = e.path[2].dataset.id;
    const todo = document.querySelector(`[data-id='${todoIndex}']`);
    todoList.removeChild(todo);
}

const changeStatus = (e) => {
    const todoIndex = e.path[2].dataset.id;
    const targetedTodo = document.getElementById(`status-${todoIndex}`);
    if (targetedTodo.innerHTML == '<i class="far fa-square" aria-hidden="true"></i>') {
        return targetedTodo.innerHTML = '<i class="far fa-check-square"></i>';
    } else {
        return targetedTodo.innerHTML = '<i class="far fa-square"></i>';
    };
};

export { currentProject, newTodo, openForm, closeForm };