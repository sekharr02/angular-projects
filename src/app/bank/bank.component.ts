import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {

  public banks:any=[];
  public search:string='';

  public column:any='';
  public order:any='';

  public limit:any='';
  public page:any='';

  constructor(private bankservice:BankService){

    bankservice.bankservice().subscribe(
      (data:any)=>{
        this.banks=data;

      },
      (err:any)=>{
        alert("internal error")
      }
    )
   
}
getbankFilter(){
  this.bankservice.bankFilter(this.search).subscribe(
  (data:any)=>{
    this.banks=data;

  },
  (err:any)=>{
    alert("internal error")
  }
  )

}
getsortBank(){
  this.bankservice.bankSort(this.column,this.order).subscribe(
    (data:any)=>{
      this.banks=data;
  
    },
    (err:any)=>{
      alert("internal error")
    }
    )

}
getpagination(){
  this.bankservice.bankpagination(this.limit,this.page).subscribe(
    (data:any)=>{
      this.banks=data
    },
    (err:any)=>{
      alert("intercal server error")
    }

  )
}
delete(id:any){
  this.bankservice.delete(id).subscribe(
    (data:any)=>{
      alert("deleted succesfully")
      location.reload();
    },
    (err:any)=>{
      alert("internal sevrve error")
    }
  )

}

}
