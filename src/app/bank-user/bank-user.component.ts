import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank-user',
  templateUrl: './bank-user.component.html',
  styleUrls: ['./bank-user.component.scss']
})
export class BankUserComponent {

  public bankusers: FormGroup = new FormGroup({
    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture:new FormControl(),
    id:new FormControl()
  })
  constructor(private bankservice:BankService){}
  check(){
    console.log(this.bankusers)
    this.bankservice.createuser(this.bankusers.value).subscribe(
      (data:any)=>{
        alert("added succesfully")
      },
      (err:any)=>{
        alert("not added")
      }
    )
  }

}
