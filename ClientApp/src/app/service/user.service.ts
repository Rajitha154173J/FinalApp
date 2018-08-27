import {  Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import 'rxjs/add/operator/map';


@Injectable()

export class UserService {

  constructor(private http : HttpClient) { }

  getUser(){
    var access_token = localStorage.getItem("access_token")

    console.log(access_token);
    return this.http.get("http://localhost:5000/api/Auth/UserDetail")
    .map((res:any) =>res);
  }

  registerUser(data){

    // console.log(data);
    return this.http.post("http://localhost:5000/api/Auth",data)
    .map((response:any)=>response);
  }
}
