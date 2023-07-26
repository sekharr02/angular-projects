import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public cart:number=0;

  constructor(private commonservice:CommonService){
    commonservice.getValue().subscribe(
      (data:any)=>{
        this.cart=data;
      }
    )

  }



}
