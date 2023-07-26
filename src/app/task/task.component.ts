import { Component, Input } from '@angular/core';
import { __values } from 'tslib';
// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
public num1:number=0;
public num2:number=0;

public result:any=[];

catch(value:any){
  this.result=value;
}


}
