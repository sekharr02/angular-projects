import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-productuser',
  templateUrl: './productuser.component.html',
  styleUrls: ['./productuser.component.scss']
})
export class ProductuserComponent {
  public productUser:FormGroup= new FormGroup({
    name:new FormControl(),
    price:new FormControl(),
    color:new FormControl(),
    features:new FormGroup({
      ram:new FormControl(),
      battery:new FormControl(),
      processor:new FormControl()
    }),
      cards:new FormArray([]),
      mode:new FormControl(),
      upi:new FormControl(),
      netbanking:new FormControl()
  })

  get cardArray(){
    return this.productUser.get("cards") as FormArray;
  }
  add(){
    this.cardArray.push(
      new FormGroup({
        name:new FormControl(),
        time:new FormControl(),
        message:new FormControl()
      })
    )
  }
  delete(i:number){
    this.cardArray.removeAt(i);
  }


  submit(){
    console.log(this.productUser)
  }

}
