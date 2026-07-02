import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent implements OnInit {

  notifications:any[]=[];

  unread=0;

  customerId=0;

  constructor(
    private notificationService:NotificationService
  ){}

  ngOnInit(): void {

    this.customerId=
      Number(localStorage.getItem("customerId"));

    this.load();

    interval(5000).subscribe(()=>{

      this.load();

    });

  }

  load(){

    this.notificationService
      .getNotifications(this.customerId)
      .subscribe((res:any)=>{

        this.notifications=res;

      });

    this.notificationService
      .getUnreadCount(this.customerId)
      .subscribe((res:any)=>{

        this.unread=res;

      });

  }

  read(id:number){

    this.notificationService
      .markAsRead(id)
      .subscribe(()=>{

        this.load();

      });

  }

}