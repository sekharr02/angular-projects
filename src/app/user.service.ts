import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
    getuser():Observable<any>{
      return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    }
    
    getusers():Observable<any>{
     return this.httpClient.get('/assets/product.json')
    }
}
