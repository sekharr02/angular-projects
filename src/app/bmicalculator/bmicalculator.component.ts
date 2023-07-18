import { Component } from '@angular/core';

@Component({
  selector: 'app-bmicalculator',
  templateUrl: './bmicalculator.component.html',
  styleUrls: ['./bmicalculator.component.scss']
})
export class BmicalculatorComponent {

  public height1:number = 0;
  public weight:number = 0;
  public result :number = 0;

  calculate(){
    this.result=this.weight/((this.height1/100)*(this.height1/100))
  }

  

}
