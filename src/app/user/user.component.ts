import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  public users:any=[];

  constructor(private userservice:UserService){
     userservice.getuser().subscribe(
      (data:any)=>{
        this.users=data
      },
      (err:any)=>{
        alert("server unavailable")
      }
     )

  }

}
