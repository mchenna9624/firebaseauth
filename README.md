# Angular Firebase Authentication

Welcome back guys, hope you enjoyed previous tutorial "MyToDo" (<a href="https://github.com/mchenna9624/MyToDo" target="_blank">https://github.com/mchenna9624/MyToDo</a>)

If you are first time here, please check below link to follow it. It is strongly recommended to follow previous post, becuase this tutorial repository is an 
extension of "MyToDo" repository.

<a href="https://www.linkedin.com/pulse/angular-cli-typescript-heroku-github-continuous-todo-madhu-chenna" target="_blank">MyToDo Previous Post</a>


# Preface

The Firebase platform is a perfect fit for your Angular web or mobile application as it offers various useful backend services as real-time database, storage, 
notification, authentication etc. 

In this tutorial we’ll learn how to make use of the Firebase authentication service in your Angular application. We’ll start from existing "MyToDo" application and add 
authentication to that application with step by step appraoch.

Authentication is a common task for most web and mobile application. By using the Firebase authentication service, authentication functionality can be easily integrated 
in your application. The Firebase service can be configured to make use of various authentication providers like Google, Facebook, Twitter or GitHub. 

 

# Prerequisites

Since we have already developed "MyToDo" application, I am assuming we have development environment ready this tutorial. If in case you don't have installed 
follow below steps to install all needed software.

```
   1. $ npm install -g @angular/cli
   
   For AngularFire2 to work we will also need to install typings and typescript.
   
   2. $ npm install -g typings
   3. $ npm install -g typescript
```

clone MyToDo repository to local, so we can add authentication to that app.

```
    1. git clone https://github.com/mchenna9624/MyToDo.git
    2. npm install
    3. ng serve
    4. at this step you should see MyToDo application loaded in browser @ http://localhost:4200
```

# Setup Firebase Project

In order to be able to make use of the Firebase authentication service, we need to set up a new Firebase project first. 
This step is done in the Firebase backend which is called Firebase console and available at <a href="https//console.firebase.google.com" target="_blank">Firebase Console</a>

 
 You first need to create a Firebase account, so that you’re able to login to the console. After having logged in you’ll be able to see the following screen:
 
 
 ![Alt text](https://raw.githubusercontent.com/mchenna9624/firebaseauth/master/src/assets/images/firebase1.png)

### 
