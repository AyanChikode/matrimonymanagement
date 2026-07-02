import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { ProfileInterestService } from 'src/app/services/profile-interest.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  currentCustomerId=0;

  selectedCustomer:any=null;

  matches:any[]=[];

  messages:any[]=[];

  message="";

  constructor(

    private chatService:ChatService,
    private interestService:ProfileInterestService

  ){}

  ngOnInit(): void {

    this.currentCustomerId=Number(
      localStorage.getItem("customerId")
    );

    this.loadMatches();

    interval(2000).subscribe(()=>{

if(this.selectedCustomer){

this.loadMessages();

}

});

  }

  loadMatches(){

    this.interestService
    .getMatches(this.currentCustomerId)
    .subscribe({

      next:(res:any)=>{

        this.matches=res;

      }

    });

  }

  openChat(customer:any){

    this.selectedCustomer=customer;

    this.loadMessages();

  }

  loadMessages(){

    this.chatService
    .getMessages(

      this.currentCustomerId,

      this.selectedCustomer.id

    )
    .subscribe({

      next:(res:any)=>{

        this.messages=res;

      }

    });

  }

 send() {

  if (!this.selectedCustomer) {
    alert("Please select a match first.");
    return;
  }

  if (this.message.trim() === "") {
    return;
  }

  const body = {
    senderId: this.currentCustomerId,
    receiverId: this.selectedCustomer.id,
    message: this.message
  };

  this.chatService.sendMessage(body).subscribe({
    next: () => {
      this.message = "";
      this.loadMessages();
    }
  });

}

}