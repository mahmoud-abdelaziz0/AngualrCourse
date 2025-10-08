import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StdData } from '../../../../Interfaces/student';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styles: ``
})
export class Students implements OnChanges{
  studentsArrData:StdData[] = []
 @Input() StudentDataFromParent:any // object {name ,age}
 @Input() ahmed = ''

//  fun(){
//   this.studentsArrData.push(this.StudentDataFromParent)
//  }

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)
  if(!changes['StudentDataFromParent'].firstChange){
    this.studentsArrData.push(this.StudentDataFromParent)
  }
}

}
