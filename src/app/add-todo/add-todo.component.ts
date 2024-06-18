import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {TodoItem} from "../todo-item";

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() addNewTodoItem: EventEmitter<any> = new EventEmitter();
  addText: string = '';
  addNewTodo = () => {
    const newTodoItem: TodoItem = {
      id: crypto.randomUUID(),
      text: this.addText
    }
    this.addNewTodoItem.emit(newTodoItem);
    this.addText = '';
  }

}
