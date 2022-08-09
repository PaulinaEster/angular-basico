import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim';
  userData = {
    email: 'joaquim@imail.com',
    role: 'admin',
    pass: '1234'
  }
  title = 'curso-angular';
}
