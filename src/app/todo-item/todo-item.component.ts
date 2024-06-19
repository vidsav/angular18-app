import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from "../todo-item";
import {NgClass, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [
    UpperCasePipe,
    NgClass
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todoObject!: TodoItem;
  @Output() deleteTodoItem: EventEmitter<any> = new EventEmitter();
  @Output() toggleIsDone: EventEmitter<any> = new EventEmitter();

  deleteTodoItemHandler = () => {
    this.deleteTodoItem.emit(this.todoObject);
  }
}
