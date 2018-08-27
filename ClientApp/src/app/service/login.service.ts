import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RouterLink, Router } from "@angular/router";

@Injectable()
export class LoginService {

  constructor(private http : HttpClient,
  private router:Router) { }

  getAccess(){
    
   return this.http.get("http://localhost:5000/api/Auth")
    .map((response: any)=>response);
   
    

  }

}
