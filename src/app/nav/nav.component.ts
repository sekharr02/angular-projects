import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public count:number=0;
  constructor(private comminservice:CommonService){
    comminservice.getValue().subscribe(
      (data:any)=>{
       this.count=data;
      }
    )
  }

}
