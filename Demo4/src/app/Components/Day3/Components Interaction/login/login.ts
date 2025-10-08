import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginData = 'login data to Home component 🌟😡'

  @Output() myEvent = new EventEmitter()

  // input = new EventEmitter()

  fire() {
    this.myEvent.emit(this.loginData)
  }
}
