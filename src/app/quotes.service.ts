import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private httpClient:HttpClient) { }
     getoutput():Observable<any>{
     return this.httpClient.get("https://www.boredapi.com/api/activity")
     }
}
