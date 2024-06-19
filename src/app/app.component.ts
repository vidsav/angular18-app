import {Component, inject} from '@angular/core';
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {TodoItem} from "./todo-item";
import {NgForOf} from "@angular/common";
import {filter} from "rxjs";
import {AddTodoComponent} from "./add-todo/add-todo.component";
import {RandomColorDirective} from "./random-color.directive";
import {TodoItemsService} from "./todo-items.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoItemComponent, NgForOf, AddTodoComponent, RandomColorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoItemsService:TodoItemsService = inject(TodoItemsService);
  itemsArray = this.todoItemsService.getTodoItems();
  todosListHandler = () => {
    this.todoItemsService.setTodoItems(this.itemsArray);
    this.itemsArray = this.todoItemsService.getTodoItems();
  }

  deleteTodoFromList = (item:TodoItem) => {
    this.itemsArray = this.itemsArray.filter(filterItem=>filterItem.id !== item.id);
    this.todosListHandler();
  }

  addNewTodoItem = (item:TodoItem) => {
    this.itemsArray.unshift(item);
    this.todosListHandler();
  }

  toggleIsDone = (item: TodoItem) => {
    item.isDone = !item.isDone;
    this.todosListHandler();
  }
}
