import { Component, OnInit } from '@angular/core';
import { ProfileInterestService } from 'src/app/services/profile-interest.service';

@Component({
  selector: 'app-sent-interests',
  templateUrl: './sent-interests.component.html',
  styleUrls: ['./sent-interests.component.css']
})
export class SentInterestsComponent implements OnInit {

  currentCustomerId!: number;

  profiles: any[] = [];
  filteredProfiles: any[] = [];
  interests: any[] = [];

  constructor(private interestService: ProfileInterestService) {}

  ngOnInit(): void {
    const customerId = Number(localStorage.getItem('customerId'));

    

    this.interestService.getSentInterests(customerId)
    this.interestService.getSentInterests(customerId).subscribe({

  next:(res)=>{

    console.log(res);

    this.interests=res;

  }

});
  }

}