import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
    getuser():Observable<any>{
      return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    }
    
    getusers():Observable<Product[]>{
     return this.httpClient.get<Product[]>('/assets/product.json')
    }
}
