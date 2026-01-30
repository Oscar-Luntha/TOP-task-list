export function initAddProjectDialog(){
    const dialog = document.getElementById("addProjectDialog")
    const openBtn = document.getElementById("openAddProject")
    const form = document.getElementById("addProjectForm")
    openBtn.addEventListener('click', () => {
        dialog.showModal();
    })
    form.addEventListener('submit', () => {
        const formData = new FormData(form)
        const projectData = {
            name: formData.get("name"),
            category : formData.get("category")
        }
        form.reset()
        dialog.close()
    })
    form.addEventListener('reset', () => {
        dialog.close()
    })  
}