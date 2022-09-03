import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AtualizaTabelaService {
  
  observable = new Subject();

  constructor() { }

  setObservable(newValue: any){
    this.observable.next(newValue);
  }

  getObservable(): Observable<any>{
    return this.observable.asObservable();
  }
}
