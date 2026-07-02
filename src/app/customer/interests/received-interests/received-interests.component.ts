import { Component, OnInit } from '@angular/core';
import { ProfileInterestService } from 'src/app/services/profile-interest.service';

@Component({
  selector: 'app-received-interests',
  templateUrl: './received-interests.component.html',
  styleUrls: ['./received-interests.component.css']
})
export class ReceivedInterestsComponent implements OnInit {

  receivedInterests:any[]=[];

  customerId:number=0;

  constructor(
    private interestService:ProfileInterestService
  ){}

  ngOnInit(): void {

  this.customerId = Number(
    localStorage.getItem('customerId')
  );

  this.loadReceivedInterests();

}

  loadReceivedInterests(){

    this.interestService
      .getReceivedInterests(this.customerId)
      .subscribe({

        next:(res:any)=>{

          this.receivedInterests=res;

        }

      });

  }

  accept(id:number){

    this.interestService
      .acceptInterest(id)
      .subscribe({

        next:()=>{

          alert("Interest Accepted");

          this.loadReceivedInterests();

        }

      });

  }

  reject(id:number){

    this.interestService
      .rejectInterest(id)
      .subscribe({

        next:()=>{

          alert("Interest Rejected");

          this.loadReceivedInterests();

        }

      });

  }

}