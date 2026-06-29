import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileInterestService {

  private apiUrl = "http://localhost:8081/profileinterest";

  constructor(private http: HttpClient) { }

  sendInterest(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  getSentInterests(customerId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/sent/${customerId}`);
  }

  getReceivedInterests(customerId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/received/${customerId}`);
  }

  acceptInterest(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/accept/${id}`, {});
  }

  rejectInterest(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/reject/${id}`, {});
  }
}