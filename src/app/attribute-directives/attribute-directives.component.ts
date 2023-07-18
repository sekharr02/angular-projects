import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent {

  public term:string='';

  public students:any = [
    {name: "praneeth",science:10, math:40},
    {name:"chandu", science:50,math:10},
    {name :'raju',science:20,math:65},
    {name:"venkat",science:35,math:26},
    {name:"rakesh",science:15,math:45},
    {name:"veeresh",science:45,math:80},
    {name:"sai",science:90,math:34}
  ]
  public date:any = new Date();
  search(){
    this.students=this.students.filter((student:any)=>student.name.includes(this.term))
  }
  add(){
    this.students=this.students.map((student:any)=>{
      student.science=student.science+2;
      return student
    })
  }
  sort(){
    this.students=this.students.sort((a:any,b:any)=>b.science-a.science)
  }
  total(){
    var total=this.students.reduce((sum:number,b:any)=>sum+b.science,0);
    alert (total)
  }
  clear(i:any){
    this.students.splice(i,1)
  }

}
