import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Users {
  // userData = {
  //   name:'ahmed',
  //   age:28,
  //   email:'ahmed23@gmail.com'
  // }

  // changeName(userName:string){
  //   console.log("changeName worked")
  //   this.userData.name = userName

  //   console.log(this.userData)
  // }

  // fName = 'Omar'

  constructor(private myhttpClient:HttpClient){}


  // URL_DB = "https://jsonplaceholder.typicode.com/users"
  URL_DB = "http://localhost:3000/users"

  // getAllUsers(){
  //   this.myhttpClient.get(this.URL_DB).subscribe({next:(data)=> this.usersArr = data})
  //   return this.usersArr
  // }

  getAllUsers(){
    return this.myhttpClient.get(this.URL_DB)
  }

  getUserByID(id:any){
    return this.myhttpClient.get(`${this.URL_DB}/${id}`)
  }

}
