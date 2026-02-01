import { deleteProject } from "../services/projectServices";
export function renderProject(project){
    const projectList = document.getElementById('projectList');
    const li = document.createElement("li");
    li.textContent = project.title;
    li.dataset.id = project.id;

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => {
        deleteProject(project.id);
        li.remove()
    })
    li.appendChild(deleteBtn)
    projectList.appendChild(li)
}
export function renderProjects(projects){
    const projectList = document.getElementById("projectList")
    projectList.innerHTML = "";
    projects.forEach(renderProject);
}

export function showError(message){
    const errorContainer = document.getElementById('errorContainer')
    errorContainer.textContent = message;
    errorContainer.style.display = 'block'
    setTimeout( () => {
        errorContainer.style.display = 'none'
    }, 3000)
}
