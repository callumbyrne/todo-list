import { removeAllTodos, renderTodo, renderAllTodos } from "./todos";

const projectsArray = [['Default']];
let currentProject = projectsArray[0];
const todoList = document.getElementById('todos');

const newProject = (e) => {
    e.preventDefault();

    const projects = document.getElementById('projects');

    const projectName = document.getElementById('newProject').value;

    if (projectName.length > 17) {
        alert('Project name is too long!');
        document.querySelector('.projectForm').reset();
        return;
    };

    const newArray = [projectName];
    projectsArray.push(newArray);
    document.getElementById('projectForm').reset();

    const project = document.createElement('div');
    project.innerText = projectName;
    project.classList.add('project');
    project.setAttribute('data-project', (projectsArray.length - 1));
    projects.appendChild(project);

    project.addEventListener('click', (e) => {
        console.log(e.target.dataset.project);
        switchProject(e);
        removeAllTodos();
        renderAllTodos(currentProject);
    })
};

const switchProject = (e) => {
    const selectedProject = e.target.innerText;
    const projectIndex = e.target.dataset.project;
    currentProject = projectsArray[projectIndex];

    const todosTitle = document.getElementById('todosTitle');
    todosTitle.innerText = selectedProject;
};





export { newProject, currentProject };