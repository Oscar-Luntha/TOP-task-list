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
export function saveall(projects){
    save(projects)
}