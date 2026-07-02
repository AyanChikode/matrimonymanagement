import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private api = "http://localhost:8081/chat";

  constructor(private http: HttpClient) { }

  getMessages(senderId:number, receiverId:number):Observable<any>{

    return this.http.get(
      `${this.api}/conversation/${senderId}/${receiverId}`
    );

  }

  sendMessage(data:any):Observable<any>{

    return this.http.post(
      `${this.api}/send`,
      data
    );

  }

}