import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  api = "http://localhost:8081/notification";

  constructor(private http: HttpClient) {}

  getNotifications(customerId:number){
    return this.http.get(
      `${this.api}/${customerId}`
    );
  }

  markAsRead(id:number){
    return this.http.put(
      `${this.api}/read/${id}`,
      {}
    );
  }

  getUnreadCount(customerId:number){
    return this.http.get(
      `${this.api}/unread/${customerId}`
    );
  }

}