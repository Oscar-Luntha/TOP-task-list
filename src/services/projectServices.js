import Project from "../models/project";
import * as storage from '../data/storage'
import { store } from "../state/store";
import { initialProjects } from "../data/initialProjects";

export function initProjects(){
    store.projects = initialProjects.map(project => new Project(project))
}

export function getProjects(){
    return storage.getProjects()
}
export function addProject(projectData){
    if(!projectData.title || !projectData.category){
        throw new Error("Project Title and category required")
    }

    const projects = storage.getProjects();
    const projectExists = projects.some(
        p => p.title.toLowerCase() === projectData.title.toLowerCase()
    )
    if (projects.length >= 10) {
        throw new Error("Maximum number of projects reached");
    }

    if(projectExists){
        throw new Error('Project already exists')
    }
    const newProject = new Project(projectData)
    storage.saveall([...projects, newProject]);
    return newProject;
}
export function deleteProject(id){
    const projects = storage.getProjects();
    storage.saveall(projects.filter(p => p.id !== id))
}

export function createProject(title) {

  store.projects.push(
    new Project({
      id: crypto.randomUUID(),
      title,
      tasks: []
    })
  );
}

export function addTaskToProject(taskData, projectId = "default") {
  const project = store.projects.find(project => project.id === projectId);
  if (!project) return;
  project.addTask({
    id: crypto.randomUUID(),
    ...taskData
  });
}