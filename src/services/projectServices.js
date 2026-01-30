import Project from "../models/project";
export function addProject(projectData){
    return new Project(projectData)
}