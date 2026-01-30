import { Task } from "./task";

export default class Project{
    constructor({id, name,category, tasks = []}){
        this.id = id;
        this.name = name;
        this.category = category;
        this.tasks = tasks.map(task => new Task(task))
    }
    addTask(taskData){
        this.tasks.push(new Task(taskData))
    }
    removeTask(taskId){
        this.tasks = this.tasks.filter(task => task.id !==taskId)
    }
}