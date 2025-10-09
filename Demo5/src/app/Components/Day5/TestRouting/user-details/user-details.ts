import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styles: ``
})
export class UserDetails implements OnInit {
  userId:any

  constructor(private myActivate:ActivatedRoute){}

  ngOnInit(): void {
    console.log(this.myActivate)
    this.userId = this.myActivate.snapshot.params['id']
  }

}
