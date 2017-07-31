import { Component, OnInit } from '@angular/core';
import {TodoService} from './todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit {
  public todos;
  public activeTasks;
  public newTodo;
  public inactiveTasks;
  public path;

  constructor(private todoService: TodoService, private route: ActivatedRoute, private router: Router, private auth: AuthService) { }

  getTodos(query = ''){
    return this.todoService.get(query).then(todos => {
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
      return this.getTodos(this.path);
    });
  }

  destroyTodo(todo){
    this.todoService.delete(todo._id).then(() => {
      return this.getTodos(this.path);
    });
  }

  updateTodoStatus(todo){
    todo.isDone = !todo.isDone;
    return this.todoService.put(todo).then(() => {
      return this.getTodos(this.path);
    });
  }

  clearCompletedTasks(){
    return this.todoService.deleteCompleted().then(() => {
      return this.getTodos(this.path);
    });
  }

  logout(){
    this.auth.logout().then((result) => {
      if(result){
        this.route.params['status'] = 'login';
      }
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params['status'];
      this.getTodos(this.path);
    });


  }

}
