import { Component, OnInit } from '@angular/core';
import { CustomerProfileService } from 'src/app/customer-profile/services/customer-profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html'
})
export class MyProfileComponent implements OnInit {

  profile:any;

  constructor(
    private profileService:CustomerProfileService
  ){}

  ngOnInit(): void {

    const customerId =
      Number(localStorage.getItem('customerId'));

    this.profileService
      .getProfiles()
      .subscribe((res:any)=>{

        this.profile =
          res.find(
            (x:any)=>
            x.customer_id.id===customerId
          );

      });

  }

}