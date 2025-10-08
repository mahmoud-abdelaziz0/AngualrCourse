import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

// interface Hello{
//   sayHello():string
// }

// interface Welcome{
//   sayWelcom():string
// }

// class User implements Hello, Welcome{
//   sayHello(){
//     return "hello"
//   }

//   sayWelcom(): string {
//     return "welcome"
//   }
// }


@Component({
  selector: 'app-test-life-cycle',
  imports: [],
  templateUrl: './test-life-cycle.html',
  styles: ``
})
export class TestLifeCycle implements OnInit, OnDestroy, OnChanges{
interv:any

  @Input() dataFroParent = ''

  constructor(){
    console.log("constructor 🌅")
    // alert("welcom ya mahmoud")
  }

  ngOnInit(): void {
    console.log("ngOnInit ☀️");
   this.interv = setInterval(()=>{
      console.log('interval worked')
    }, 1000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges 🔰")
    console.log(changes)
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy 🚶🏻‍➡️😔")
    clearInterval(this.interv)
    console.log("interval cleared")
  }

}
