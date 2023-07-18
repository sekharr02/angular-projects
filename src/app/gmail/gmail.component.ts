import { Component } from '@angular/core';
import { GmailService } from '../gmail.service';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.scss']
})
export class GmailComponent {

  public gmails:any=[];

  constructor(private gmailservices:GmailService){
    gmailservices.getgmail().subscribe(
      (data:any)=>{
        this.gmails=data;
      },
      (err:any)=>{
        "server connection error"
      }
    )
  }

}
