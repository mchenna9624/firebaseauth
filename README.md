# MyToDo
Demo App with Angular CLI, TypeScript, Heroku and Continuous Integration

# 1. Prerequisites

This Demo is targeted to people familiar with JavaScript, HTML and CSS. To run in your local, you need following software

Node.js
NPM
You can verify by typing:

1. node --version
2. npm --version
If you get the versions Node 4.x.x or higher and NPM 3.x.x. or higher you are all set. If not you have to get the latest versions.

Let’s move on to Angular. We are going to create a Todo app. We will be able to CRUD (create-read-update-delete) tasks:

Live Demo: <a href="https://stormy-woodland-23554.herokuapp.com/" target="_blank">Angular 2 Todo app</a>

# 2. Getting Start with Angular CLI

Angular CLI is the best way to get us started. We can download the tool and create a new project by running:


```
# Install Angular CLI Globally
         npm install -g @angular/cli@latest       
         
# Create new Angular CLI Project
         ng new MyToDo
```
The command ng new will do a bunch of things for us:

Initialize a git repository
Creates an package.json files with all the Angular dependencies.
Setup TypeScript, Webpack, Tests (Jasmine, Protractor, Karma). 
It creates the src folder with the bootstrapping code to load our app into the browser
Finally, it does an npm install to get all the packages into node_modules.

###Let’s run the app!
```
ng serve
```
Open your browser on http://localhost:4200/ and you should see “Welcome to App with some links”. Awesome!

Alternatively you can specify port if you want to run on any particular port 

```
ng serve --port 8080
```

Now let’s dive into the src folder and get familiarized with the structure.


## 2.1 package.json

Open the package.json file and take a look at the dependencies. We have all the angular dependencies with the prefix @angular/.... 
There are other dependencies that are needed for Angular 2 to run, such as RxJS, Zone.js, and some others. We are not going to cover them here in this post.

## 2.2 src/index.html

We are building a SPA (single page application) so everything is going to be loaded into the index.html. Let’s take a look in the src/index.html. 
It’s pretty standard HTML5 code, except for two elements that are specific for our app:

<base href="/">
<app-root></app-root>
base href is needed for Angular 2 routing to work properly. We are going to cover Routing latter in its topic.

<app-root> this is not a standard HTMl tag. It’s actually defined by our Angular App. It’s an Angular component. More on this later.

## 2.3 src/main.ts

This is the part where our application starts bootstrapping (loading). Angular 2 can be used not just in browsers, but also on other platforms such as 
mobile apps or even desktop apps. So, when we start our application we have to specify what platform we want to target. 
That’s why we import: platform-browser-dynamic. Notice that we are also importing the AppModule from ./app/app.module.

The most important line is:
```
platformBrowserDynamic().bootstrapModule(AppModule);
```
We are loading our AppModule into browser platform. 

## 2.4 app/app.module.ts

We are going to be using this file often. The most important part is the metadata inside the @NgModule. 
There we have declarations, imports, providers and bootstrap.

Declarations: goes all your components
Imports: routes and modules go here.
Bootstrap: list the component you want to load when the app starts. By default AppComponent.

## 2.5 app/app.component.ts

This looks a little similar to the app module, but instead of @NgModule we have @Component. 
Again, the most important part is the value of the attributes (metadata). We have selector, templateUrl and styleUrls.

selector: is the name of the component. Remember that we had <app-root></app-root>? This is where is defined. 
templateUrl: This is where the HTML code is. <app-root> will be replaced for whatever you have in the template.
styleUrls: You can have styles that only applies to this component. This is pretty neat! 
You can change the styles with confidence knowing that it won’t bleed to other parts of the website.

Inside the AppComponent class you can define variables (e.g. title) that are used in the templates 
(e.g. Angular 2 Tutorial: Create a CRUD App with Angular CLI and TypeScript).

Let’s change the title from app works! to 'MY TODOs'.

## 2.6 app/app.component.html

You will see some default code but important piece of code is 

```
<div style="text-align:center">
  <h1>
    Welcome to {{title}}!
  </h1>
</div>
```

{{title}} value will be derived from app.component.ts title variable which we changed earlier.

Just keep above code and delete rest all the code. which is not needed for our demo app.

Test your changes running:  ng serve 
open port you specified in browser. In my case it is default which is  http://localhost:4200   you should see 'Welcome to MY TODOs!' on the scree 

# 3. Deploying Angular CLI App into Heroku Cloud

Angular2 CLI generated apps can’t be directly deployed in Heroku. But it is easy to configure them to do that using scripts to build and serve the app.

I used angular-cli 1.2.3 to generate and Angular2 app. And configured the package.json file using heroku-prebuild, heroku-postbuild and start scripts 
to build the app and serve it using http-server.

```
"scripts": {
  "heroku-prebuild": "npm install -g http-server",
  "heroku-postbuild": "ng build --prod",
  "start": "http-server dist/",
```
  
Heroku-prebuild and heroku-postbuild are Heroku-specific build steps, they are equivalent to the generic preinstall or postinstall but using them 
we avoid running those scripts locally.

In Heroku dev-dependencies are not installed by default, that means that to make the ng build script to work we need to move dev-dependency to 
the dependencies block.

I moved all of my dev-dependencies to dependencies section in package.json file.

##### NOTE: You can only move only the dependencies required for the build but not the testing or linting dependencies.

#### Another alternative to the http-server solution explained here is to use the NGINX and <a href="https://github.com/heroku/heroku-buildpack-static" target="_blank">Heroku-buildpack-static.</a>


# 4. Creating new Component with Angular CLI

Let’s create a new component to display the todos. We can easily create by typing:

```
ng generate component todos
```

This command will generate a new folder with following 4 files and also updates app.module.ts to include newly generated TodosComponent

```
  create src/app/todos/todos.component.css
  create src/app/todos/todos.component.html
  create src/app/todos/todos.component.spec.ts
  create src/app/todos/todos.component.ts
  update src/app/app.module.ts
```  
Go ahead and inspect each one. It will look similar to the app components. 
Go to src/app/app.component.html, and remove the ```<h1>Welcome to {{title}}!</h1>``` and replace it with: ```<app-todos></app-todos>```
If you have ng serve running, it should automatically update and show todos works!

# 5. Todos Template
“todos works!” is not useful. Let’s change that by adding some HTML code to represent our todo tasks. 
Go to the src/app/todos/todos.component.html file and copy-paste this HTML code:

```
<section class="todoapp">
  <header class="header">
    <h1>Todo (s)</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus>
  </header>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <label for="toggle-all">Mark all as complete</label>
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li class="completed">
        <div class="view">
          <input class="toggle" type="checkbox" checked>
          <label>Install angular-cli</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
      </li>
      <li>
        <div class="view">
          <input class="toggle" type="checkbox">
          <label>Understand Angular2 apps</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Rule the web">
      </li>
    </ul>
  </section>
  <!-- This footer should hidden by default and shown when there are todos -->
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>0</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed">Clear completed</button>
  </footer>
</section>

```

This has the general structure about how we want to represent our tasks. Right now it has hard-coded tasks. 
We are going to slowly turn it into a dynamic app using Angular 2 data bindings. But before that let’s add some styling so things look better.

# 6. Styling the todos app
  
  We are going to use a community maintained CSS for Todo apps. We can go ahead and download the CSS:
  
  ```
     1. npm install --save todomvc-app-css
  ```
  This will install a CSS file that we can use to style our Todos app and make it look nice. In the next section, we are going to explain 
  how to use it with the angular-cli.json.
  
  
# 7. Adding global styles to angular-cli.json

angular-cli.json is a special file that tells the Angular CLI how to build your application. You can define how to name your root folder, 
tests and much more. What we care right now, is telling the angular CLI to use our new CSS file from the node modules. 
You can do it by adding the following line into the styles array:

```
"styles": [
  "styles.scss",
  "../node_modules/todomvc-app-css/index.css"
],
```
If you stop and start ng serve, you will see that now it looks much better.


We have the skeleton so far. Now we are going to make it dynamic and allow users to add/remove/update/sort tasks. 

# 8. Todo Service

Let’s first start by creating a service that contains an initial list of tasks that we want to manage. 
We are going to use a service to manipulate the data. Let’s create the service with the CLI by typing:

```
 1. ng g service todos/todo
``` 
This will create two files with a warning

```
  1. create src/app/todos/todo.service.spec.ts    is created with a unit test for your new service
  2. create src/app/todos/todo.service.ts   is created that exports a service class named TodoService
  3. WARNING Service is generated but not provided, it must be provided to be used
```
Notice how Angular CLI warns that the service is generated but not provided anywhere yet. 
It is up to you to register the service as a provider by adding it to the providers: [] array where you need it (e.g. in a module or component). 

# 9. CRUD Functionality

For enabling the create-read-update-delete functionality, we are going to be modifying three files:

src/app/todos/todo.service.ts
src/app/todos/todos.component.ts
src/app/todos/todos.component.html
Let’s get started!

### 9.1 READ: Get All Tasks

Let's modify the todo.service.js to be able to get tasks

```
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
}
```

Now we need to change our todos component to use the service that we created.

```
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



  constructor(private todoService: TodoService) { }

  getTodos(){
    return this.todoService.get().then(todos => {
      this.todos = todos;
      this.activeTasks = this.todos.filter(todo => todo.isDone).length;
    });
  }

  ngOnInit() {
    this.getTodos();
  }

}
```

The first change is importing our TodoService and adding it to the providers. Then we use the constructor of the component to load the TodoService. 
While we inject the service we can hold a private instance of it in the variable todoService. Finally, we use it in the getTodos method. 
This will make a variable todos available in the template where we can render the tasks.

Let’s change the template so we can render the data from the service. Go to the todos.component.html and change what is inside the <li></li> for this one:

```
      <li *ngFor="let todo of todos" [ngClass]="{completed: todo.isDone}" >
        <div class="view">
          <input class="toggle" type="checkbox" [checked]="todo.isDone">
          <label>{{todo.title}}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="{{todo.title}}">
      </li>
```

Also change todocount span with following line

```
<span class="todo-count"><strong>{{activeTasks}}</strong> item left</span>
```

Now, let’s go over what we just did. We can see that we added new data-binding into the template:

*ngFor: iterates through the todos array that we defined in the component and assigned in the let todo part.

[ngClass]: applies a class when the expression evaluates to true. In our case, it uses class completed when isDone is true.

[checked]: applies the checked attribute when the expression evaluates to true (todo.isDone).


### 9.2 CREATE: Using form field INPUT

Let’s start with the template this time. We have an input element for creating new tasks. Let’s listen to changes in the input form and when we click 
enter it creates the tasks.

```
<input class="new-todo"
           placeholder="What needs to be done?"
           [(ngModel)]="newTodo"
           (keyup.enter)="addTodo()"
           autofocus>
```

Notice that we are using a new variable called newTodo and method called addTodo(). Let’s go to the controller and give it some functionality

```
private newTodo;

addTodo(){
    this.todoService.add({title: this.newTodo, isDone: false}).then(() => {
      return this.getTodos();
    }).then(() => {
      this.newTodo = '';
    });
  }
```

First, we created a private variable that we are going to use to get values from the input form. 
Then we created a new todo using the todo service method add. It doesn’t exist yet, so we are going to create it next

```
  add(newTodoObj){
    return new Promise(resolve => {
      todos.push(newTodoObj);
      resolve(newTodoObj);
    });
  }
```

This adds the new element into the todos array and resolve the promise. That’s all. Go ahead a test it out creating a new todo element.

### 9.3 UPDATE: On Double Click

Let’s add an event listener to double click on each todo. That way, we can change the content. Editing is a tricky since we need to display an input form. 
Then when the user clicks enter it should update the value. Finally, it should hide the input and display the label with the updated value. 
Let’s do that by keeping a temp variable called editing which could be true or false.

```
<li *ngFor="let todo of todos" [ngClass]="{completed: todo.isDone, editing: todo.editing}" >
        <div class="view">
          <input class="toggle" type="checkbox" [checked]="todo.isDone">
          <label (dblclick)="todo.editing = true">{{todo.title}}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit"
               #updatedTodo
               [value]="todo.title"
               (blur)="updateTodo(todo, updatedTodo.value)"
               (keyup.escape)="todo.editing = false"
               (keyup.enter)="updateTodo(todo, updatedTodo.value)">
</li>
```

Notice that we are adding a local variable in the template #updatedTodo. Then we use it to get the value like updateTodo.value and pass it to a function. 
We want to update the variables on blur (when you click somewhere else) or on enter. Let’s add the function that actually updates the value in the component.

Also, notice that we have a new CSS class applied to the element called editing. This is going to take care through CSS to hide and show the input element 
when needed.

```
  updateTodo(todo, newValue) {
    todo.title = newValue;
    return this.todoService.put(todo).then(() => {
      todo.editing = false;
      return this.getTodos();
    });
  }
```

We update the new todo’s title and after the service has process the update we set editing to false. Finally, we reload all the tasks again. 
Let’s add the put action on the service. But we have an issue. We actually need a unique id to identify each task. 
When we hook up the service with a real backend we will get that from the database. Let’s add it manually for now. 

```
  put(updateTodoObj) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === updateTodoObj._id);
      todos[index].title = updateTodoObj.title;
      resolve(updateTodoObj);
    });
  }
  ```
  
### 9.4 DELETE: Delete Task on click X

  Let us add click listener on X button
  
  ```
<button class="destroy" (click)="destroyTodo(todo)"></button>  
  ```

Add the destoryTodo method to component

```
  destroyTodo(todo){
    this.todoService.delete(todo._id).then(() => {
      return this.getTodos();
    });
  }
```

Lets add delete method in our service

```
 delete(id) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === id);
      todos.splice(index, 1);
      resolve(true);
    });
  }
```

# 10. Routing and Navigation

It’s time to activate the routing. When we click on the active button we want to show only the ones that are active. 
Similarly, we want to filter by completed. Additionally, we want to the filters to change the route /active or /completed URLs.

In AppComponent, we need to add the router library and define the routes as follows

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
``import { Routes, RouterModule } from '@angular/router';``
import { HttpModule } from '@angular/http';

#####const routes: Routes = [
#####  { path: ':status', component: TodosComponent },
##### { path: '**', redirectTo: '/all' }
#####];


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    #####RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
First, we import the routing library. Then we define the routes that we need. We could have said path: 'active', component: 
TodosComponent and the repeat the same for completed. But instead, we define a parameter called :status that could take any value (all, completed, active). 
Any other value path we are going to redirect it to /all. That’s what the ** means.

Finally, we add it to the imports. So the app module uses it. Since the AppComponent is using routes. Now we need to define the <router-outlet>. 
That’s the place there the routes are going to render the component based on the path (in our case TodoComponent).

Let’s go to app/app.component.html and replace <app-todos></app-todos> with <router-outlet></router-outlet>:
