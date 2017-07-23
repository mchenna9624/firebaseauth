import { Injectable } from '@angular/core';

let todos = [
  {_id: 1, title: 'attend meetup on service workers and pwd', isDone: true},
  {_id: 2, title: 'attend meetup on python', isDone: true},
  {_id: 3, title: 'learn internet of things with bluetooth technology', isDone: false},
  {_id: 4, title: 'learn programming automate cars', isDone: false}
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

  put(updateTodoObj) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === updateTodoObj._id);
      todos[index].title = updateTodoObj.title;
      resolve(updateTodoObj);
    });
  }

  delete(id) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === id);
      todos.splice(index, 1);
      resolve(true);
    });
  }

}
