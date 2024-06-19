import {Injectable} from '@angular/core';
import {TodoItem} from "./todo-item";

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {

  constructor() { }

  getTodoItems(): TodoItem[] {
    const todosJSON = localStorage.getItem('todos');
    return todosJSON ? JSON.parse(todosJSON) : [];
  }

  setTodoItems(todos:TodoItem[]) {
    localStorage.setItem('todos',JSON.stringify(todos))
  }

}


