import { Component, OnInit } from '@angular/core';
import { ProfileInterestService } from 'src/app/services/profile-interest.service';

@Component({
  selector: 'app-mutual-matches',
  templateUrl: './mutual-matches.component.html',
  styleUrls: ['./mutual-matches.component.css']
})
export class MutualMatchesComponent implements OnInit {

  matches:any[]=[];

  customerId=0;

  constructor(
    private interestService:ProfileInterestService
  ){}

  ngOnInit(): void {

    this.customerId = Number(
      localStorage.getItem("customerId")
    );

    this.loadMatches();

  }

  loadMatches(){

    this.interestService
      .getMatches(this.customerId)
      .subscribe({

        next:(res)=>{

          console.log(res);

          this.matches=res;

        }

      });

  }

}