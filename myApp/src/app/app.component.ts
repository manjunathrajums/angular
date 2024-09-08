import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Todo {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fixed 'styleUrls' (plural)
})
export class AppComponent {
  title = 'myApp';
  name: string = '';
  description: string = '';
  items: Todo[] = [];

  // Add a task to the list
  addTask() {
    console.log(this.name);
    if (this.name && this.description) {
      const newTask: Todo = {
        title: this.name,
        description: this.description,
      };
      this.items.push(newTask);
      // Clear input fields after adding task
      this.name = '';
      this.description = '';
    } else {
      console.log('Task title or description is empty');
    }
  }

  // Delete a task from the list by index
  deleteTask(index: number) {
    this.items.splice(index, 1);
  }
}
