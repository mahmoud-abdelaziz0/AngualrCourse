import { Component, OnInit } from '@angular/core';
import { Users } from '../../../services/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-service',
  imports: [],
  templateUrl: './test-service.html',
  styles: ``
})
export class TestService implements OnInit{
  // userName:any

  // constructor(myService:Users){
  //   console.log(myService)
  //   this.userName = myService.userData

  //   console.log(this.userName)
  // }

  fetchedData:any

  // ngOnInit(): void {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((res)=>  res.json())
  //   .then((data)=> this.fetchedData = data)
  // }

  // constructor(private myClient:HttpClient){}

  // ngOnInit(): void {
  //   this.myClient.get('https://jsonplaceholder.typicode.com/users').subscribe({
  //     next: (data)=> this.fetchedData = data,
  //     error: (error) => console.log("Error 👉🏻😔", error)
  //   })
  // }

  constructor(private myService:Users){}

  ngOnInit(): void {
    this.myService.getAllUsers().subscribe({
       next: (data)=> this.fetchedData = data,
       error: (error) => console.log("Error 👉🏻😔", error)
    })
  }


}
