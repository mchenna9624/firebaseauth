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
Go to src/app/app.component.html, and remove the <h1>Welcome to {{title}}!</h1> and replace it with: <app-todos></app-todos>
If you have ng serve running, it should automatically update and show todos works!
