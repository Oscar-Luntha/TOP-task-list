export function projectDetails(project){
    const container = document.getElementById("projectDetails")
    container.innerHTML = ""
    const title = document.createElement("h2")
    title.textContent = project.title
    const category = document.createElement("p")
    category.textContent = project.category
    const header = document.createElement("div")
    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = "Add Task"
    addTaskBtn.classList.add('add-task-btn')
    header.append(title, category, addTaskBtn)
    container.append(header)
}
function renderTaskList(){
    li = document.createElement("li")
}