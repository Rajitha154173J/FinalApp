import { Component, OnInit } from '@angular/core';
import { LoginService } from "../service/login.service";
import { Router } from "@angular/router";
import { Login } from "../service/login.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
      newlogin : Login = new Login()
  constructor(private loginService : LoginService ,private router:Router) { }

  ngOnInit() {
  }

  loginLocal(){
    this.loginService.getLog(this.newlogin).subscribe(res=>{console.log(res);
     if(res['success']=="true") 
     {
         this.router.navigateByUrl('/home');
      }
    });
   
  }

  loginGoogle(){
    this.loginService.getAccess().subscribe((response: any) =>{
      localStorage.setItem("access_token",response.access_token);
      localStorage.setItem("Id_token",response.Id_token)
      this.router.navigateByUrl('/home');
    }
  );
    
  }

}
