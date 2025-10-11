import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-validation',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './validation.html',
  styles: ``
})
export class Validation {
  // ☀️ refrance way
  arrData:{}[] = []
  // name = ''

  // age = ''

  // getData(name:any,age:any){
  //   // this.arrData.push({name:name, age:age})
  //   //   console.log(this.arrData)
  //   // console.log(name.value)
  //   console.log(age.value)

  //   // name.value = ''
  //   age.value = ''

  //   this.age =age.value;
  // }

  // ☀️ ReactiveFormsModule Validation

  get FormValid(){
    return this.myRegFrom.valid
  }

  get NameValid(){
    return this.myRegFrom.controls.name.valid
  }
  get AgeValid(){
    return this.myRegFrom.controls.age.valid
  }

  myRegFrom = new FormGroup({
    name: new FormControl('ahmed', [Validators.minLength(3), Validators.required]),
    age: new FormControl(25, [Validators.min(10), Validators.max(50), Validators.required])
  })


  getData(){
    console.log(this.myRegFrom)
    this.arrData.push(this.myRegFrom.value)
    console.log(this.arrData)

    console.log(this.myRegFrom.status)
    console.log(this.myRegFrom.valid)
    console.log(this.myRegFrom.controls.name)

  }


}
