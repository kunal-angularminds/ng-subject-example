import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SendMessageService } from '../send-message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  agents: Observable<string>;
  agentName : string;
  studentList = ["Ram", "Mark", "sita"];
  students : Observable<string[]>=of(this.studentList);
  studentName : Observable<string> = of("Ram");

  studentObj = {
    id : "1",
    name : "myName",
    address : "myAddress"
  };

  // $ character can be used to represent that it is a object 
  student$ : Observable<object> = of(this.studentObj);

  constructor(private messageService: SendMessageService) { }

  ngOnInit(): void {

    this.students.subscribe((data)=>{
      console.log(data);
    });

    this.studentName.subscribe((data)=>{
      console.log(data);
    });

    this.student$.subscribe((data)=>{
      console.log(data);
    });

    // this.agents = new Observable(
    //   function (observer) {
    //     try {
    //       observer.next('Ram');
    //       observer.next('Mark');
    //       observer.next('Sita');
    //     }
    //     catch(e){
    //       observer.error(e);
    //     }
    //   }
    // );

    // this.agents.subscribe((data)=>{
    //   console.log(data);
    //   this.agentName = data;
    // });

  }



  sendMessage(message) {
    this.messageService.sendMessage(message);
  }

}
