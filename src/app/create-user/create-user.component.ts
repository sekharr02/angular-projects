import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  public formUser:FormGroup=new FormGroup({
    name : new FormControl(),
    age : new FormControl(),
    phone: new FormControl(),
    email:new FormControl(),
    address: new FormGroup({
      hno:new FormControl(),
      state:new FormControl(),
      pin:new FormControl()
    }),
    type:new FormControl(),
    busFee:new FormControl(),
    hostelFee:new FormControl(),
    cards:new FormArray([])
  })

  get formarray(){
   return this.formUser.get('cards') as FormArray;
  }
  add(){
    this.formarray.push(
      new FormGroup({
        number:new FormControl(),
        expirydate:new FormControl(),
        cvv:new FormControl()
      })

    )
  }
  delete(i:number){
    this.formarray.removeAt(i);

  }

  submit(){
    console.log(this.formUser)
  }

}
