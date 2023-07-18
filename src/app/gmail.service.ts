import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GmailService {

  constructor(private httpClient:HttpClient) { }

  getgmail():Observable<any>{
      return this.httpClient.get('https://jsonplaceholder.typicode.com/todos')

  }
}
