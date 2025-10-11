import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speratedChar'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    console.log(value)
    console.log(args)
    // return value.toLowerCase();
    if(args.length > 0){
      return value.split('').join(args[0]);
    }else {
      return value.split('').join('~~');
    }
  }

}
