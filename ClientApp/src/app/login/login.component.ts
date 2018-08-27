import { Component, OnInit } from '@angular/core';
import { LoginService } from "../service/login.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService ,private router:Router) { }

  ngOnInit() {
  }

  login(){
    
  }

  loginGoogle(){
    this.loginService.getAccess().subscribe((response: any) =>{
      localStorage.setItem("access_token",response.access_token);
      this.router.navigateByUrl('/home');
    }
  );
    
  }

}
