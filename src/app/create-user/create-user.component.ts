import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { domainValidator, stateValidator } from '../validator';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  public formUser:FormGroup=new FormGroup({
    name : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age : new FormControl('',[Validators.required,Validators.min(0),Validators.max(25)]),
    phone: new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    email:new FormControl('',[Validators.required,Validators.email,domainValidator]),
    address: new FormGroup({
      hno:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      state:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),stateValidator]),
      pin:new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)])
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
        number:new FormControl('',[Validators.required]),
        expirydate:new FormControl('',[Validators.required]),
        cvv:new FormControl('',[Validators.required])
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
