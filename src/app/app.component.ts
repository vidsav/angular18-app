import { Component } from '@angular/core';
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {TodoItem} from "./todo-item";
import {NgForOf} from "@angular/common";
import {filter} from "rxjs";
import {AddTodoComponent} from "./add-todo/add-todo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoItemComponent, NgForOf, AddTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  itemsArray: TodoItem[] = [
    {id:1,text:'todo1'},
    {id:2,text:'todo2'},
    {id:3,text:'todo3'},
    {id:4,text:'todo4'},
    {id:5,text:'todo5'},
    {id:6,text:'todo6'},
  ]

  deleteTodoFromList = (item:TodoItem) => {
    this.itemsArray = this.itemsArray.filter(filterItem=>filterItem.id !== item.id);
  }
}
