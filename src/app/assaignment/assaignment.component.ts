import { Component } from '@angular/core';


@Component({
  selector: 'app-assaignment',
  templateUrl: './assaignment.component.html',
  styleUrls: ['./assaignment.component.scss']
})
export class AssaignmentComponent {
  public term:string='';

  public users:any = [
    {productname:'pen',price:10,rating:3,freedelvery:true},
    {productname:'phone',price:100,rating:2,freedelvery:false},
    {productname:'shirt',price:400,rating:4,freedelvery:true},
    {productname:'cap',price:200,rating:5,freedelvery:false},
    {productname:'mobilecase',price:300,rating:2,freedelvery:true},
    {productname:'remote',price:400,rating:2.5,freedelvery:false}
  ]
  search(){
    this.users=this.users.filter((user:any)=>user.productname.includes(this.term))
  }
  delivery(){
    this.users=this.users.filter((user:any)=>user.freedelvery==true)
  }
  sort(){
    this.users=this.users.sort((a:any,b:any)=>a.price-b.price)
  }
  sort1(){
    this.users=this.users.sort((a:any,b:any)=>b.price-a.price)
  }
  sort2(){
    this.users=this.users.sort((a:any,b:any)=>a.rating-b.rating)
  }
  sort3(){
    this.users=this.users.sort((a:any,b:any)=>b.rating-a.rating)
  }

  discount(){
    this.users=this.users.map((user:any)=>{
      user.price=user.price/2
      return user
    })
  }
  deliveryprice(){
    this.users=this.users.map((user:any)=>{
      if(user.freedelvery==false){
        user.price=user.price+50
        return user
      }else{
        return user
      }
    })
  }
  sum(){
   var total = this.users=this.users.reduce((a:number,b:any)=>a+b.price,0)
    alert(total)
  }
  total(){
    alert(this.users.length)
  }
  clear(i:any){
    this.users.splice(i,1)
  }

}

