import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
    // console.log("sds");
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logout(){
    localStorage.removeItem("access_token");
    localStorage.removeItem("Id_token");
  }
}
