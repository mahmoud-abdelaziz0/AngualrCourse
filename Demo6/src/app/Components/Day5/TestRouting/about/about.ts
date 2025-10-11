import { Component } from '@angular/core';
import { Users } from '../../../../services/users.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styles: ``
})
export class About {

  fetchedData:any

  // constructor(public userService:Users){
  //   this.userName = userService.userData
  // }

  // chgName(){
  //   this.userService.changeName("Omar")
  // }
  constructor(private myService:Users){}

  ngOnInit(): void {
    this.myService.getAllUsers().subscribe({
       next: (data)=> this.fetchedData = data,
       error: (error) => console.log("Error 👉🏻😔", error)
    })
  }


}
