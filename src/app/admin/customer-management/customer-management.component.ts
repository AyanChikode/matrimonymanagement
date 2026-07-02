import { Component, OnInit } from '@angular/core';
import { AdminCustomerService } from 'src/app/services/admin-customer.service';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html'
})
export class CustomerManagementComponent implements OnInit{

customers:any[]=[];

constructor(
private service:AdminCustomerService
){}

ngOnInit(): void {

this.load();

}

load(){

this.service.getAllCustomers()
.subscribe((res:any)=>{

this.customers=res;

});

}

block(id:number){

this.service.block(id)
.subscribe(()=>{

this.load();

});

}

unblock(id:number){

this.service.unblock(id)
.subscribe(()=>{

this.load();

});

}

}