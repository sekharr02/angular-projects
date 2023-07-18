import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  public students:any=[];
  public filter:string='';

  public column:any=[];
  public order:any=[];


  constructor(private studentservice:StudentService){
     studentservice.getstudent().subscribe(
      (data:any)=>{
        this.students=data;

      },
      (err:any)=>{
        alert("server unavailable")
      }
     )
   

   }
   getstudentFilter(){
    this.studentservice.studentfilter(this.filter).subscribe(
      (data:any)=>{
        this.students=data;

      },
      (err:any)=>{
        alert("server unavailable")
      }
     )

   }
   getstudentsorted(){
    this.studentservice.studentsort(this.column,this.order).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("server unavailable")
      }
     )

   }
  

}

