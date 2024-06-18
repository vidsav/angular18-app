import {Component, Input} from '@angular/core';
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

}
