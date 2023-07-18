import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent {
  public names:string[] = ['instagram','pubg','nenu']

  public states:string[] = ['Angular','HTML','CSS',"hello"]


  public products :any = [
    {name:'pen',price:20},
    {name:'mobile',price:15000},
    {name:'watch',price:5000}
]
 public users :any = [
  {name:'a',phone:9494,class:10,marks:100},
  {name:'b',phone:8500,class:8,marks:85},
  {name:'c',phone:9685,class:6,marks:94}
 ]

 public num : number= 0;

}
