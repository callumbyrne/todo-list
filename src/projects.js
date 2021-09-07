const projectsArray = [['Default']];
let currentProject = projectsArray[0];

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
    console.table(projectsArray);
    document.getElementById('projectForm').reset();

    const project = document.createElement('div');
    project.innerText = projectName;
    project.classList.add('project');
    projects.appendChild(project);
};





export { newProject, currentProject };