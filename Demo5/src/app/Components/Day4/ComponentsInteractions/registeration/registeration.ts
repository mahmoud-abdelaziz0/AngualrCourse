import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  imports: [FormsModule],
  templateUrl: './registeration.html'
})
export class Registeration {
  name = "";
  age = "";


  @Output() myEvent = new EventEmitter()

  getData() {
    let stdobj = {name:this.name, age:this.age}
    // console.log(stdobj)

    this.myEvent.emit(stdobj)
  }
}
