import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styles: ``
})
export class Students {
 @Input() StudentDataFromParent:any
}
