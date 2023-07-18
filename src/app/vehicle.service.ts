import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient:HttpClient) { }
  getVehicles():Observable<any>{
   return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction');

  }
  getFiltervehicles(search:any):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+search) 
  }

  createvehicle(data:any):Observable<any>{
   return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data)
  }
  getSoredvehicles(column:any,order:any):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order)
  }

  getpagination(stops:any,page:any){
    return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit='+stops+"&page="+page)
  }
  delete(id:any):Observable<any>{
    return this.httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id)
  }
}


