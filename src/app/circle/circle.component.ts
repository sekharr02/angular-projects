import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent {
  public radius:number = 0;
  public result:number = 0;

  area(){
    this.result=22/7*(this.radius*this.radius)
  }
  perimeter(){
    this.result=2*(22/7*this.radius)
  }

}
