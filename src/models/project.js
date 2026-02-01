import { Task } from "./task";

export default class Project{
    constructor({id, title, category ,tasks = []}){
        this.id = crypto.randomUUID;
        this.title = title;
        this.category = category;
        this.tasks = tasks.map(task => new Task(task))
    }
    addTask(taskData){
        this.tasks.push(new Task(taskData))
    }
    removeTask(taskId){
        this.tasks = this.tasks.filter(task => task.id !==taskId)
    }
    displayTitle(){
        return `${this.title}`
    }
}