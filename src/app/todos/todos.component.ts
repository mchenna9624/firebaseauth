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
  private inactiveTasks;



  constructor(private todoService: TodoService) { }

  getTodos(){
    return this.todoService.get().then(todos => {
      this.todos = todos;
      this.activeTasks = this.todos.filter(todo => todo.isDone).length;
      this.inactiveTasks = this.todos.length - this.activeTasks;
    });
  }

  addTodo(){
    this.todoService.add({_id: this.todos.length+1, title: this.newTodo, isDone: false}).then(() => {
      return this.getTodos();
    }).then(() => {
      this.newTodo = '';
    });
  }

  updateTodo(todo, newValue) {
    todo.title = newValue;
    return this.todoService.put(todo).then(() => {
      todo.editing = false;
      return this.getTodos();
    });
  }

  destroyTodo(todo){
    this.todoService.delete(todo._id).then(() => {
      return this.getTodos();
    });
  }

  updateTodoStatus(todo){
    todo.isDone = !todo.isDone;
    return this.todoService.put(todo).then(() => {
      return this.getTodos();
    });
  }

  ngOnInit() {
    this.getTodos();
  }

}
