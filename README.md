# Angular 2 Firebase Authentication

Guys, I am making this tutorial as an extension to our previous tutorial "MyToDo" (<a href="https://github.com/mchenna9624/MyToDo" target="_blank">https://github.com/mchenna9624/MyToDo</a>)
If you have not followed previous post, please check below urls to follow it. It is strongly recommended to follow previous post, becuase this tutorial repository is an extension of
"MyToDo" repository.

Linkedin lin for "MyToDo" is <a href="https://www.linkedin.com/pulse/angular-cli-typescript-heroku-github-continuous-todo-madhu-chenna" target="_blank">MyToDo Linked In</a>


# Preface

The Firebase platform is a perfect fit for your Angular 2 web or mobile application as it offers various useful backend services as real-time database, storage, 
notification, authentication etc. 

In this tutorial you’ll learn how to make use of the Firebase authentication service in your Angular 2 application. We’ll start from existing "MyToDo" application and add 
authentication with step by step appraoch.

Authentication is a common task for most web and mobile application. By using the Firebase authentication service, authentication functionality can be easily integrated 
in your application. The Firebase service can be configured to make use of various authentication providers like Google, Facebook, Twitter or GitHub. 
By using those providers the user is able to use existing web accounts to sign in. 
 

# Prerequisites

Since we have already developed "MyToDo" application, I am assuming we have development environment ready this tutorial If in case you don't have installed follow below 
steps to install all needed software.

```
   1. $ npm install -g @angular/cli
   
   For AngularFire2 to work we will also need to install typings and typescript.
   
   2. $ npm install -g typings
   3. $ npm install -g typescript
```
