import './styles.css';
import { newProject, currentProject, switchProject, deleteProject } from './projects';
import { newTodo, openForm, closeForm, removeAllTodos, renderAllTodos } from './todos';

document.addEventListener('DOMContentLoaded', () => {
    //create new project
    document.getElementById('newProjectBtn').addEventListener('click', (e) => newProject(e));
    //open add new todo form
    document.querySelector('.newTodo').addEventListener('click', openForm);
    //close add new todo form
    document.getElementById('cancel').addEventListener('click', (e) => closeForm(e));
    //submit new todo
    document.getElementById('submitBtn').addEventListener('click', (e) => newTodo(e));
    //event listener to switch to default project
    document.querySelector('.project').addEventListener('click', (e) => {
        switchProject(e);
        removeAllTodos();
        renderAllTodos(currentProject);
    });
    //delete default project
    document.querySelector('.projectDelete').addEventListener('click', deleteProject);
});
