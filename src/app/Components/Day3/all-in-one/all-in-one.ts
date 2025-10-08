import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../Interfaces/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-in-one',
  imports: [FormsModule, CommonModule],
  templateUrl: './all-in-one.html',
  styleUrl: './all-in-one.css'
})
export class AllInOne {
  name:string = ''
  age:any
  // AllStudentData:{sName:string, sAge:string}[] = []
  AllStudentData:Student[] = []

  sendData(){

    if(this.age <= 25){
      // console.log(this.name, this.age)
      // let stdObject = {sName: this.name, sAge: this.age}
      // console.log(stdObject)
      this.AllStudentData.push({sName: this.name, sAge: this.age})

      console.log(this.AllStudentData)
          this.name = ''
          this.age = ''
    }
  }
}
