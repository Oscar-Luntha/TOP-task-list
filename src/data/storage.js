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
const TASK_KEY = 'tasks'
function loadTasks(){
    return JSON.parse(localStorage.getItem(TASK_KEY)) || [];
}
function saveTasks(tasks){
    localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
}
export function getTasks(){
    return loadTasks();
}
export function saveAllTasks(tasks){
    saveTasks(tasks);
}