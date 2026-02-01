import Project from "../models/project";
import * as storage from '../data/storage'
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