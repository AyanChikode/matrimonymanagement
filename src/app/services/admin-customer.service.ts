import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminCustomerService {

  api="http://localhost:8081/customers";

  constructor(private http:HttpClient) {}

  getAllCustomers(){
    return this.http.get(this.api+"/list");
  }

  block(id:number){
    return this.http.put(this.api+"/block/"+id,{});
  }

  unblock(id:number){
    return this.http.put(this.api+"/unblock/"+id,{});
  }

}