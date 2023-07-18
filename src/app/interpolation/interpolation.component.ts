import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent {

  public name:string = 'Welcome to Angular';
  public introduced:number = 2015;
  public isFramework:boolean = true;  

  public Versionintroduced:number[] = [2001,2002,2005,2006]
  public Versions:string[] = ['Angular5','Angular6','Angular7','Angular8']

//   public methods:any{}
//     name:'interpolation'
//     number:123

// }
}
