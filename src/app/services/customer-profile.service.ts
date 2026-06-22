import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerProfileService {

  private api =
  'http://localhost:8081/customerprofiles';

  constructor(
    private http: HttpClient
  ) {}

  getProfiles() {

    return this.http.get<any[]>(
      `${this.api}/list`
    );

  }

}