import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  private baseUrl="http://localhost:8081";

  registerCustomer(data:any){
 return this.http.post(
 `${this.baseUrl}/customers/register`,
 data
 );
}
getCustomer(id:number){
 return this.http.get(
 `${this.baseUrl}/customers/${id}`
 );
}
updateCustomer(id:number,data:any){
 return this.http.put(
 `${this.baseUrl}/customers/update/${id}`,
 data
 );
}
}
