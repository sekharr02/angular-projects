import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public count:number=0;
  public countvalue:BehaviorSubject<any>=new BehaviorSubject(0);

  setValue(){
    this.countvalue.next(this.count++)
  }

  getValue(){
    return this.countvalue.asObservable();
  }
}
