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
  // constructor() {
  // }
  itemsArray = this.todoItemsService.getTodoItems();
  // itemsArray: TodoItem[] = [
  //   {id:'1',text:'todo1'},
  //   {id:'2',text:'todo2'},
  //   {id:'3',text:'todo3'},
  //   {id:'4',text:'todo4'},
  //   {id:'5',text:'todo5'},
  //   {id:'6',text:'todo6'},
  // ]

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
}
