import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Product } from '../product';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  public users:any=[];
  public mobiles:Product[]=[];

  constructor(private userservice:UserService){
     userservice.getuser().subscribe(
      (data:any)=>{
        this.users=data
      },
      (err:any)=>{
        alert("server unavailable")
      }
     )
     userservice.getusers().subscribe(
      (data:Product[])=>{
        this.mobiles=data
      },
      (err:Product[])=>{
       alert("not working")
      }
     )
  }
    
    

}
  