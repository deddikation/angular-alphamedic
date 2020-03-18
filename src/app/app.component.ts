import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularfirebase-authentication';
  onMenuClick($event){    
    console.log("Menu button is clicked!", $event);    
  }    
}
