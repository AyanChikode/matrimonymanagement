import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerProfileService {

  private api = 'http://localhost:8081/customerprofiles';

  constructor(private http: HttpClient) {}

  getProfiles() {
    return this.http.get<any[]>(`${this.api}/list`);
  }

  getProfileById(id:number) {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  getProfileByCustomerId(customerId:number) {
    return this.http.get<any>(
      `${this.api}/customer/${customerId}`
    );
  }

  saveProfile(data:any) {
    return this.http.post(`${this.api}/register`, data);
  }

  updateProfile(id:number,data:any) {
    return this.http.put(`${this.api}/${id}`, data);
  }

  deleteProfile(id:number) {
    return this.http.delete(`${this.api}/${id}`);
  }

  getAllProfiles() {
  return this.http.get<any[]>(
    `${this.api}/list`
  );
}
}