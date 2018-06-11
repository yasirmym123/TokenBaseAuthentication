import { Component, OnInit } from '@angular/core';
import {  AuthServiceService} from '../auth-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginUserData={}
  constructor(private auth: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }
  loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(
      res => { console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/special'])},
       
      
      
      err => console.log(err)
    )
  }

}
