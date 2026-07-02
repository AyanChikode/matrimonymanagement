import { Component, OnInit } from '@angular/core';
import { ProfileInterestService } from 'src/app/services/profile-interest.service';

@Component({
  selector: 'app-sent-interests',
  templateUrl: './sent-interests.component.html',
  styleUrls: ['./sent-interests.component.css']
})
export class SentInterestsComponent implements OnInit {

  interests: any[] = [];

  constructor(
    private interestService: ProfileInterestService
  ) {}

  ngOnInit(): void {

    const customerId = Number(localStorage.getItem('customerId'));

    this.interestService.getSentInterests(customerId).subscribe({

      next: (res: any) => {

        console.log(res);

        this.interests = res;

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

}