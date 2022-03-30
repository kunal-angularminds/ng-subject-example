import { Component, OnInit } from '@angular/core';
import { SendMessageService } from '../send-message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message:string;
  constructor(private messageService:SendMessageService) { }

  ngOnInit(): void {
    this.messageService.recievedMessage().subscribe((data)=>{
      this.message = data;
    });
  }

}
