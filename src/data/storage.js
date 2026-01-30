const PROJECTS_KEY = 'projects'
function load(){
    return JSON.parse(localStorage.getItem(PROJECTS_KEY)) || [];
}
function save(projects){
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects))
}
export function getProjects (){
    return load()
}
export function addProject(project){
    const projects = load()
    projects.push(project)
    save(projects)
}
export function removeProject(id){
    const projects = load().filter(p => p.id !== id)
    save(projects)
}