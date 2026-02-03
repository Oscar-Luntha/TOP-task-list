import { Task } from "../models/task";
import * as storage from '../data/storage';
import { store } from "../state/store";

export function getTasks(){
    return storage.getTasks();
}