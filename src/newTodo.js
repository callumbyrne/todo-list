import { projectsArray } from './newProject';
import { Todo } from './factory';

let currentProject = projectsArray[0];

const newTodo = (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;

    const todo = Todo(title, description, date, priority);
    currentProject.push(todo);
    document.querySelector('#todoForm').reset();
    console.table(projectsArray);

    const todoList = document.querySelector('.todos');
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo');
    const todoTitle = document.createElement('div');
    todoTitle.innerText = title;
    const todoDescription = document.createElement('div');
    todoDescription.innerText = description;
    const todoDate = document.createElement('div');
    todoDate.innerText = date;
    const todoPriority = document.createElement('div');
    todoPriority.innerText = priority;

    todoContainer.append(todoTitle, todoDescription, todoDate, todoPriority);
    todoList.append(todoContainer);
}

export { currentProject, newTodo };