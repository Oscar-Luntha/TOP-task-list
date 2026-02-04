import { store } from "../state/store";

export function projectDetails(project){
    const container = document.getElementById("projectDetails")
    container.innerHTML = ""
    store.activeProject = project
    const title = document.createElement("h2")
    title.textContent = project.title
    const category = document.createElement("p")
    category.textContent = project.category
    const header = document.createElement("div")
    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = "Add Task"
    addTaskBtn.classList.add('add-task-btn')
    header.append(title, category, addTaskBtn)

    const taskList = document.createElement("ul")
    taskList.classList.add("task-list")
    const tasks = Array.isArray(project.tasks) ? project.tasks : []
    if (tasks.length === 0) {
        const emptyState = document.createElement("p")
        emptyState.textContent = "No tasks yet."
        container.append(header, emptyState)
        return
    }

    tasks.forEach((task) => {
        const li = document.createElement("li")
        const priority = task.priority ? ` (${task.priority})` : ""
        li.textContent = `${task.name}${priority}`
        taskList.append(li)
    })

    container.append(header, taskList)
}
