import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-taskone',
  templateUrl: './taskone.component.html',
  styleUrls: ['./taskone.component.scss']
})
export class TaskoneComponent {

  @Input() public num1:number=0;
  @Input() public num2:number=0;

  
  @Output() public info:EventEmitter<any>=new EventEmitter();


  sum(){
    this.info.emit(this.num1+this.num2)
  }
  sub(){
    this.info.emit(this.num1-this.num2)

  }
  mul(){
    this.info.emit(this.num1*this.num2)
  
  }
  

}
