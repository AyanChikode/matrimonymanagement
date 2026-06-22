import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-profiles',
  templateUrl: './customer-profiles.component.html',
  styleUrls: ['./customer-profiles.component.css']
})
export class CustomerProfilesComponent implements OnInit {


  profiles: any[] = [];
  constructor(private http : HttpClient) {
    
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8081/customerprofiles/list')
  }


  

}
