import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './Components/First/first';
import { Second } from "./Components/second/second";
import { DispayInfo } from './Components/dispay-info/dispay-info';
import { AllInOne } from "./Components/Day3/all-in-one/all-in-one";
import { Home } from "./Components/Day3/Components Interaction/home/home";
import { Login } from "./Components/Day3/Components Interaction/login/login";
import { Registeration } from "./Components/Day4/ComponentsInteractions/registeration/registeration";
import { Students } from "./Components/Day4/ComponentsInteractions/students/students";
import { StdData } from './Interfaces/student';
import { TestLifeCycle } from "./Components/Day4/test-life-cycle/test-life-cycle";

@Component({
  selector: 'app-root',
  imports: [
    /**
     * Componets
     * Directives [custom]
     * Pipes [custom]
     * ExternalModules   like [CommonModule, FormsModule, RouterModule, ....]
     */
    First,
    Second,
    DispayInfo,
    AllInOne,
    Home,
    Login,
    Registeration,
    Students,
    TestLifeCycle
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // parentData = 'Data From Parent'
  reciveLoginData = ''

  // getData(ev:any){
  //   console.log(ev)
  //   // console.log(ev.target.value)
  // }

  getLoginData(data:any){
    console.log(data)
    this.reciveLoginData = data
  }

  // StudentsArr:{name:string, age:string}[] = []
  // StudentsArr:StdData[] = []
  oneStudent:any

  getRegData(regData:any){
    console.log(regData)

    // this.StudentsArr.push(regData)
    // console.log(this.StudentsArr)

    this.oneStudent = regData
  }

  isShow:boolean = true

  toggleBtn(){
    this.isShow = !this.isShow
  }

  parentData = 'hello form parent'

}
