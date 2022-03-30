import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  constructor() { }

  // private subject = new Subject<string>();
  private subject = new BehaviorSubject<string>("initial state");

  sendMessage(message:string){
    this.subject.next(message);
  }

  recievedMessage():Observable<string>{
    return this.subject.asObservable();
  }

}
