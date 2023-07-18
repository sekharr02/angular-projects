import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private httpClient:HttpClient) { }

  bankservice():Observable<any>{
   return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals')
  }

  bankFilter(search:any):Observable<any>{
    return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter='+search)

  }
  createuser(data:any){
    return this.httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/principals',data)
  }
  bankSort(column:any,order:any):Observable<any>{
   return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy='+column+"&order="+order)
  }
  bankpagination(limit:any,page:any):Observable<any>{
    return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit='+limit+'&page='+page)
  }
  delete(id:any):Observable<any>{
    return this.httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id)
  }

}
