import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',


  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  public quotes: any= [];
 
  constructor(private quoteservice:QuotesService){
   
  }

  ngOnInit(): void {
    this.check()
  }

  check(): void{
    this.quoteservice.getoutput().subscribe(
      (data:any)=>{

        this.quotes=[data];
        console.log(this.quotes)
      },
      (err:any)=>{
        alert("server unavailable")
  }
    )

  }
}
