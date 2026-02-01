import { addProject , getProjects} from "../services/projectServices"
import { showError, renderProject, renderProjects } from "./helpers"
export function initAddProjectDialog(){
    const dialog = document.getElementById("addProjectDialog")
    const openBtn = document.getElementById("openAddProject")
    const form = document.getElementById("addProjectForm")
    openBtn.addEventListener('click', () => {
        dialog.showModal();
    })
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData (form))
        console.log(data)
        try{
            const newProject = addProject(data);
            renderProject(newProject)
            form.reset()
            dialog.close();
        }catch(err){
            showError(err.message)
        }
    })
    form.addEventListener('reset', () => {
        dialog.close()
    })  
    renderProjects(getProjects())
}