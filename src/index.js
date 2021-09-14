import './styles.css';
import { newProject, currentProject, switchProject, deleteProject, projectsArray, removeAllProjects, renderAllProjects } from './projects';
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
    //delete default project
    // document.querySelector('.projectDelete').addEventListener('click', deleteProject);
});


if (projectsArray[0][0] === 'Default' && projectsArray.length == 1 && projectsArray[0].length == 1) {
    removeAllProjects();
    renderAllProjects();
} else {
    removeAllProjects();
    renderAllProjects();
    const todosTitle = document.getElementById('todosTitle');
    todosTitle.innerText = projectsArray[0][0];
    renderAllTodos(currentProject);
};