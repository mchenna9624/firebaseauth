import { Injectable } from '@angular/core';

let todos = [
  {title: 'attend meetup on service workers and pwd', isDone: true},
  {title: 'attend meetup on python', isDone: true},
  {title: 'learn internet of things with bluetooth technology', isDone: false},
  {title: 'learn programming automate cars', isDone: false}
];

@Injectable()
export class TodoService {

  constructor() { }

  get(){
    return new Promise(resolve => {resolve(todos)});
  }

  add(newTodoObj){
    return new Promise(resolve => {
      todos.push(newTodoObj);
      resolve(newTodoObj);
    });
  }
}
