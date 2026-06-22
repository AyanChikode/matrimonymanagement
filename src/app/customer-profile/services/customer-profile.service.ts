import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerProfileService {

  private api =
    'http://localhost:8081/customerprofiles';

  constructor(
    private http: HttpClient
  ) {}

  saveProfile(data:any){
    return this.http.post(
      `${this.api}/register`,
      data
    );
  }

 getProfiles(): Observable<any[]> {

  return this.http.get<any[]>(
    `${this.api}/list`
  );

}

  getProfileById(id:number){
    return this.http.get(
      `${this.api}/${id}`
    );
  }

  updateProfile(id:number,data:any){
    return this.http.put(
      `${this.api}/${id}`,
      data
    );
  }

  deleteProfile(id:number){
    return this.http.delete(
      `${this.api}/${id}`
    );
  }

}