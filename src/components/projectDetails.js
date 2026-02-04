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
        if (!task.id) {
            task.id = crypto.randomUUID()
        }
        const li = document.createElement("li")
        li.dataset.taskId = task.id
        if (task.completed) {
            li.classList.add("task-completed")
        }

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.classList.add("task-toggle")
        checkbox.checked = Boolean(task.completed)

        const label = document.createElement("span")
        const priority = task.priority ? ` (${task.priority})` : ""
        label.textContent = `${task.name}${priority}`

        const deleteBtn = document.createElement("button")
        deleteBtn.type = "button"
        deleteBtn.classList.add("task-delete")
        deleteBtn.textContent = "Delete"

        li.append(checkbox, label, deleteBtn)
        taskList.append(li)
    })

    taskList.addEventListener("change", (event) => {
        const toggle = event.target.closest(".task-toggle")
        if (!toggle) return
        const li = toggle.closest("li")
        const taskId = li?.dataset.taskId
        const taskIndex = tasks.findIndex((task) => task.id === taskId)
        if (taskIndex === -1) return
        tasks[taskIndex].completed = toggle.checked
        projectDetails(store.activeProject)
    })

    taskList.addEventListener("click", (event) => {
        const deleteBtn = event.target.closest(".task-delete")
        if (!deleteBtn) return
        const li = deleteBtn.closest("li")
        const taskId = li?.dataset.taskId
        const taskIndex = tasks.findIndex((task) => task.id === taskId)
        if (taskIndex === -1) return
        tasks.splice(taskIndex, 1)
        projectDetails(store.activeProject)
    })

    container.append(header, taskList)
}
