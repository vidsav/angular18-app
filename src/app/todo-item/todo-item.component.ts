import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from "../todo-item";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todoObject!: TodoItem;
  @Output() deleteTodoItem: EventEmitter<any> = new EventEmitter();

  deleteTodoItemHandler = () => {
    this.deleteTodoItem.emit(this.todoObject);
  }

}
