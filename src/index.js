import './styles.css';
import { newProject, projectsArray } from './newProject';
import { currentProject } from './newTodo';
import { newTodo } from './newTodo';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('newProjectBtn').addEventListener('click', (e) => newProject(e));
    document.querySelector('.newTodo').addEventListener('click', () => {
        const newTodo = document.querySelector('.newTodo');
        newTodo.style.display = 'none';
        const formBody = document.querySelector('.form-body');
        formBody.style.display = 'block';
    });
    document.getElementById('cancel').addEventListener('click', () => {
        const formBody = document.querySelector('.form-body');
        formBody.style.display = 'none';
        const newTodo = document.querySelector('.newTodo');
        newTodo.style.display = 'block';
    });
    document.getElementById('submitBtn').addEventListener('click', (e) => newTodo(e));

});

console.table(projectsArray);
console.log(currentProject);
