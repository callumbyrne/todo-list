const projectsArray = [['Default']];

const newProject = (e) => {
    e.preventDefault();

    const ul = document.querySelector('ul');

    const projectName = document.getElementById('newProject').value;

    if (projectName.length > 17) {
        alert('Project name is too long!');
        document.querySelector('.projectForm').reset();
        return;
    };

    const newArray = [projectName];
    projectsArray.push(newArray);
    console.table(projectsArray);
    document.querySelector('.projectForm').reset();

    const newLi = document.createElement('li');
    newLi.innerText = projectName;
    ul.appendChild(newLi);
};



export { newProject, projectsArray };