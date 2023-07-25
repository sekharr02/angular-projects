import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImp]'
})
export class ImpDirective {

  constructor(private element:ElementRef) {
    element.nativeElement.style.backgroundColor='#000';
    element.nativeElement.style.color="#fff"
    element.nativeElement.style.marginTop='15px'

   }

}
