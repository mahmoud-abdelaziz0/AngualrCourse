import { Component } from "@angular/core";
import { Second } from "../second/second";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-first',
  imports: [
    Second,
    FormsModule
  ],
  templateUrl: './first.html',
  styleUrl: './first.css'
})
export class First {

  name:string = 'aya'
  lName:any = 'ahmed'
  typeInput = 'button'
  colNum = 3
  imgSrc = "images/img2.jpg"

  textInput = ''

  chgName(e:any){
    console.log(e)
    this.name = 'Mahmoud'
  }

  chgSrc(){
    this.imgSrc = "images/img3.jpg"
  }

  backSrc(){
    this.imgSrc = "images/img2.jpg"
  }

  getData(ay7aga:any){
    console.log(ay7aga)
    // console.log(ay7aga.target)
    // console.log(ay7aga.target.value)

    this.textInput = ay7aga
    // this.textInput = ay7aga.target.value
  }

  // chgImg(imgSrc:any){
  //   console.log(imgSrc)
  //   imgSrc = "images/img2.jpg"
  //   console.log(imgSrc)
  // }


}



// function fun(x:any){

// }
// let obj = {
//   fname: 'ahmed'
// }

// fun(obj.fname)
