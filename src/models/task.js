export class Task{
    constructor(id, name, priority, completed){
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.completed = completed;
    }
    togle(){
        return this.completed = !this.completed;
    }
}