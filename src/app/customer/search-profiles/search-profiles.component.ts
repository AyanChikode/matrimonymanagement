import { Component, OnInit } from '@angular/core';
import { CustomerProfileService } from 'src/app/services/customer-profile.service';
import { ProfileInterestService } from 'src/app/services/profile-interest.service';

@Component({
  selector: 'app-search-profiles',
  templateUrl: './search-profiles.component.html',
  styleUrls: ['./search-profiles.component.css']
})
export class SearchProfilesComponent implements OnInit {

  currentCustomerId!: number;
  profiles:any[] = [];
  filteredProfiles:any[] = [];

  searchName = '';
  searchCity = '';
  searchGender = '';

  constructor(
    private profileService:
    CustomerProfileService,
    private profileInterestService: ProfileInterestService
  ) {}

  ngOnInit(): void {

    this.currentCustomerId = Number(localStorage.getItem('customerId'));
    this.loadProfiles();

  }

 loadProfiles() {

  this.profileService.getAllProfiles().subscribe({

    next: (res: any) => {

      this.profiles = res.filter(
        (p: any) => p.customer_id.id != this.currentCustomerId
      );

      this.filteredProfiles = this.profiles;

    }

  });

}

  searchProfiles() {

    this.filteredProfiles =
      this.profiles.filter(profile => {

        const nameMatch =
          this.searchName === ''
          ||
          profile.customerName
          ?.toLowerCase()
          .includes(
            this.searchName
            .toLowerCase()
          );

        const cityMatch =
          this.searchCity === ''
          ||
          profile.city
          ?.toLowerCase()
          .includes(
            this.searchCity
            .toLowerCase()
          );

        const genderMatch =
          this.searchGender === ''
          ||
          profile.gender
          === this.searchGender;

        return (
          nameMatch
          &&
          cityMatch
          &&
          genderMatch
        );

      });

  }

  sendInterest(profile:any){

const customerId = Number(localStorage.getItem("customerId"));

const data={

from_customer_id: customerId,

to_customer_id: profile.customer_id.id,

status:"PENDING"

};

this.profileInterestService.sendInterest(data).subscribe({

next:(res)=>{

alert("Interest Sent Successfully ❤️");

},

error:(err)=>{

alert(err.error);

}

});

}

}