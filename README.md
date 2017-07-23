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

Live Demo: <a href="https://stormy-woodland-23554.herokuapp.com/">Angular 2 Todo app</a>

# 2. Getting Start with Angular CLI

Angular CLI is the best way to get us started. We can download the tool and create a new project by running:


```
npm install -g @angular/cli@latest
```
1
2
3
4
5
# install angular-cli globally
npm i -g angular-cli@1.0.0-beta.17
# create a new project
ng new Todos2 --style=scss
Note The last command takes some minutes. Leave it running and continue reading this tutorial.

The command ng new will do a bunch of things for us:

Initialize a git repository
Creates an package.json files with all the Angular dependencies.
Setup TypeScript, Webpack, Tests (Jasmine, Protractor, Karma). Don’t worry if you don’t what they are. We are going to cover them later.
It creates the src folder with the bootstrapping code to load our app into the browser
Finally, it does an npm install to get all the packages into node_modules.
Let’s run the app!

1
2
# builds the app and run it on port 9000
ng serve ---port 9000
Open your browser on http://localhost:9000/ and you should see “Loading…” and then it should switch to “app works!”. Awesome!

Now let’s dive into the src folder and get familiarized with the structure.


