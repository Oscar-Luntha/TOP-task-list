import { store } from "../state/store";
import { projectDetails } from "./projectDetails";
import { showError } from "./helpers";
import { updateProject } from "../services/projectServices";

export function initAddTaskDialog(){
    const dialog = document.getElementById("addTaskDialog")
    const form = document.getElementById("addTaskForm")

    document.addEventListener("click", (event) => {
        const trigger = event.target.closest(".add-task-btn")
        if (!trigger) return
        dialog.showModal()
    })

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        if (!store.activeProject) {
            showError("Select a project before adding a task.")
            dialog.close()
            return
        }
        const data = Object.fromEntries(new FormData(form))
        const newTask = {
            id: crypto.randomUUID(),
            name: data.taskName,
            priority: data.priority,
            completed: false
        }
        const tasks = Array.isArray(store.activeProject.tasks)
            ? store.activeProject.tasks
            : []
        tasks.push(newTask)
        store.activeProject.tasks = tasks
        updateProject(store.activeProject)
        projectDetails(store.activeProject)
        form.reset()
        dialog.close()
    })

    form.addEventListener("reset", () => {
        dialog.close()
    })
}
