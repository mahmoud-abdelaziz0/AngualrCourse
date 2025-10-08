import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-dispay-info',
  imports: [FormsModule],
  templateUrl: './dispay-info.html',
  styleUrl: './dispay-info.css'
})
export class DispayInfo {

  name:string = ''
  age:string = ''
  gender:string = 'male'
  email:string = ''
  country:string = ''

  allInfoData:any = {}

  displayData(){
    this.allInfoData = {userName:this.name,userAge:this.age, gender:this.gender,email:this.email, country:this.country}
    console.log(this.allInfoData)
  }

}
