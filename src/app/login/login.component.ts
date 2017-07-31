import { Component, OnInit, HostBinding } from '@angular/core';
import {AuthService} from "../auth.service";
import { fadeInAnimation } from '../router.animations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit() {
    console.log("Login component initialise");
  }

  loginGoogle() {
    this.auth.loginWithGoogle().then((result) =>{
      if(result){
        //location.href = "all";
        location.replace('https://todo-firebaseauth.herokuapp.com');
      }
    });
  }



}
