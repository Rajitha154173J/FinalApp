import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(private http: HttpClient) {
  //   http.get('http://localhost:5000/api/auth')
  //     .subscribe((res:any) => localStorage.setItem("access_token", res.acess_token));
  //   var abc = localStorage.getItem("access_token");
  //   console.log(abc);
    
  // }
}
