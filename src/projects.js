import { removeAllTodos, renderAllTodos } from "./todos";

const projectsArray = [['Default']];
let currentProject = projectsArray[0];
const newTodo = document.querySelector('.newTodo');

const newProject = (e) => {
    e.preventDefault();

    const projectName = document.getElementById('newProject').value;

    if (projectName.length > 17) {
        alert('Project name is too long!');
        document.querySelector('.projectForm').reset();
        return;
    };

    const newArray = [projectName];
    projectsArray.push(newArray);
    document.getElementById('projectForm').reset();

    renderProject(projectName);
};

const renderProject = (projectName, index = projectsArray.length - 1) => {
    const project = document.createElement('div');
    project.classList.add('project');
    project.setAttribute('data-project', (index));
    project.innerHTML = `&#129312;&ensp; ${projectName}`;
    const projectDelete = document.createElement('div');
    projectDelete.innerHTML = '<i class="fas fa-times"></i>';
    projectDelete.classList.add('projectDelete');

    project.appendChild(projectDelete);
    projects.appendChild(project);

    project.addEventListener('click', (e) => {
        switchProject(e);
        removeAllTodos();
        renderAllTodos(currentProject);
    });

    projectDelete.addEventListener('click', deleteProject);
};

const switchProject = (e) => {
    const projectIndex = e.target.dataset.project;
    if (!projectIndex) {
        return;
    } else {
        currentProject = projectsArray[projectIndex];
        const todosTitle = document.getElementById('todosTitle');
        todosTitle.innerText = projectsArray[projectIndex][0];
        if (newTodo.style.display == 'none') {
            newTodo.style.display = 'block';
        };
    };
};

const deleteProject = (e) => {
    const selectedProjectIndex = e.path[2].dataset.project;
    const previousIndex = selectedProjectIndex - 1;
    const nextIndex = parseInt(selectedProjectIndex) + 1;
    const todosTitle = document.getElementById('todosTitle');
    if (currentProject === projectsArray[selectedProjectIndex]) {
        if (previousIndex > -1) {
            currentProject = projectsArray[previousIndex];
            todosTitle.innerText = projectsArray[previousIndex][0];
        } else if (nextIndex < projectsArray.length) {
            currentProject = projectsArray[nextIndex];
            todosTitle.innerText = projectsArray[nextIndex][0];
        } else {
            todosTitle.innerText = '';
            newTodo.style.display = 'none';
        };
    };

    projectsArray.splice(selectedProjectIndex, 1);
    removeAllProjects();
    renderAllProjects();
}

const removeAllProjects = () => {
    const projects = document.getElementsByClassName('project');
    while (projects[0]) {
        projects[0].parentNode.removeChild(projects[0]);
    };
};

const renderAllProjects = () => {
    if (projectsArray.length > 0) {
        for (let i = 0; i < projectsArray.length; i++) {
            renderProject(projectsArray[i][0], i);
        };
    } else {
        return;
    };
};



export { newProject, currentProject, switchProject, deleteProject };