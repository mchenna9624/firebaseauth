import { Component, OnInit } from '@angular/core';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit {
  private todos;
  private activeTasks;
  private newTodo;



  constructor(private todoService: TodoService) { }

  getTodos(){
    return this.todoService.get().then(todos => {
      this.todos = todos;
      this.activeTasks = this.todos.filter(todo => todo.isDone).length;
    });
  }

  addTodo(){
    this.todoService.add({title: this.newTodo, isDone: false}).then(() => {
      return this.getTodos();
    }).then(() => {
      this.newTodo = '';
    });
  }

  ngOnInit() {
    this.getTodos();
  }

}
