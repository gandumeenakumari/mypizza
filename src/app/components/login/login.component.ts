import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { login } from 'src/app/models/login.model';
import { loginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  addloginRequest:login={
    loginid:'',
    name:'',
    email:'',
    password:''
  };

  constructor(private route:ActivatedRoute,private loginService:loginService,private router:Router) { }

  ngOnInit(): void {
  }
  addlogin()
  {
    this.loginService.addlogin(this.addloginRequest)
    .subscribe({
      next:(login)=>
      {
        console.log("add item method called");

      }
    })
  }


}
