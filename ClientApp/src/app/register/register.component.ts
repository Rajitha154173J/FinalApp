import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from "../service/user.model";
import { UserService } from "../service/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : User = new User();
  constructor(private userService: UserService ,private router: Router) { }
 

  ngOnInit() {
  }

  register(){
    // console.log(this.user);
    if(this.user.Password==this.user.ConfirmPassword){
      this.userService.registerUser(this.user).subscribe(response=>this.router.navigateByUrl(''));
    }else{
      this.router.navigateByUrl('/register');
    }
    
  }

}
