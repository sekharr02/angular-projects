import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpclient:HttpClient) { }

  getstudent():Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }
  studentfilter(filter:any):Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+ filter)
  }
    studentsort(column:any,order:any):Observable<any>{  
     return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order)
    }
}
