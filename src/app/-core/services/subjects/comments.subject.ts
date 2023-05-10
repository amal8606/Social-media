import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class loadCommentsService {

  constructor() { }

  private subject=new Subject<any>();
  sendClickEvent1(){
    this.subject.next(true);
  }
  getClickEvent1(){
    return this.subject.asObservable();
  }
}