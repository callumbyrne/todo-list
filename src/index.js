import './styles.css';
import { newProject, projectsArray } from './projects';
import { currentProject } from './todos';
import { newTodo, openForm, closeForm } from './todos';

document.addEventListener('DOMContentLoaded', () => {
    //create new project
    document.getElementById('newProjectBtn').addEventListener('click', (e) => newProject(e));
    //open add new todo form
    document.querySelector('.newTodo').addEventListener('click', openForm);
    //close add new todo form
    document.getElementById('cancel').addEventListener('click', closeForm);
    //submit new todo
    document.getElementById('submitBtn').addEventListener('click', (e) => newTodo(e));
    //delete todo
});
