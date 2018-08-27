import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  constructor(private userService : UserService) { 
   
  }

  ngOnInit() {

      this.userService.getUser().subscribe(res =>{
        this.user = res;
        console.log(this.user);
      });
      
  }

}
