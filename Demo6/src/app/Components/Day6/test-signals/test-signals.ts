import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-test-signals',
  imports: [],
  templateUrl: './test-signals.html',
  styles: ``
})
export class TestSignals {

  /** Singals
   *    - signal
   *    - computed
   *    - effect
   */

  // counter =0
  counter = signal<number>(0)

  doubleCounter = computed(()=> this.counter() * 2)

  constructor(){
    console.log("constructor")
    effect(()=> localStorage.setItem('counter', this.counter().toString()))
    // effect(()=> localStorage.setItem('counter', String(this.counter())))
  }


  minus(){
    // this.counter = --this.counter
    this.counter.update((oldVal)=> --oldVal)
    // console.log(this.counter())
    // console.log("computed signal: ",this.doubleCounter())
  }
  plus(){
    // this.counter = ++this.counter
    this.counter.update((old)=> ++old)
  }

  resetCounter(){
    this.counter.set(0)
  }
}
