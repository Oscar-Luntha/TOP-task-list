import { deleteProject, getProject } from "../services/projectServices";
import { projectDetails } from "./projectDetails";
export function renderProject(project){
    const projectList = document.getElementById('projectList');
    const li = document.createElement("li");
    const projectTitle = document.createElement("h4")
    projectTitle.textContent = project.title
    projectTitle.classList.add("project-Title")
    projectTitle.dataset.id = project.id;
    projectTitle.addEventListener('click', () => {
        const selectedProject = getProject(project.id)
        projectDetails(selectedProject)
    })
    li.appendChild(projectTitle)
    const controlDiv = document.createElement('div');;
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => {
        deleteProject(project.id);
        li.remove()
    })
    controlDiv.classList.add('project-controls');
    controlDiv.append(deleteBtn);
    li.append(controlDiv)
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