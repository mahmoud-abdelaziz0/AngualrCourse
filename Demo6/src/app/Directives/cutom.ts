import { Directive, ElementRef, HostListener, Input, input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCutom]'
})
export class Cutom  implements OnInit{

  constructor(protected myRef:ElementRef) {}

  ngOnInit(): void {
    this.myRef.nativeElement.style.backgroundColor = 'black'
    this.myRef.nativeElement.style.color = 'coral'
    this.myRef.nativeElement.style.textAlign = 'center'
  }

  @HostListener('click') changeStyl(){
    this.myRef.nativeElement.style.backgroundColor = this.colorObj.bgColor
    this.myRef.nativeElement.style.color = this.colorObj.fgColor
  }

  @Input({alias:'appCutom', required:true}) colorObj={bgColor:'', fgColor:''}

}
