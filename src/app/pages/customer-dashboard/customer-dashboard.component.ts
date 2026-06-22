import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerProfileService } from 'src/app/customer-profile/services/customer-profile.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  profile: any = {};

  profileCompletion = 0;

  recommendedProfiles: any[] = [];

  recentProfiles: any[] = [];

  constructor(
    private profileService: CustomerProfileService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loadProfiles();

  }

  loadProfiles() {

    this.profileService
      .getProfiles()
      .subscribe({

        next: (res: any[]) => {

          const customerId =
            Number(localStorage.getItem('customerId'));

          this.profile =
            res.find(
              x => x.customer_id?.id === customerId
            );

          if (this.profile) {

            this.profileCompletion =
              this.calculateCompletion(
                this.profile
              );

            this.recommendedProfiles =
              res.filter(
                x =>
                  x.id !== this.profile.id &&
                  x.gender !== this.profile.gender
              )
              .slice(0, 6);

          }

          this.recentProfiles =
            [...res]
              .reverse()
              .slice(0, 5);

        }

      });

  }

  calculateCompletion(profile: any) {

    let fields = [
      profile.customerName,
      profile.age,
      profile.gender,
      profile.education,
      profile.occupation,
      profile.profilePhoto,
      profile.religion_id,
      profile.caste_id,
      profile.subcaste_id,
      profile.state_id,
      profile.district_id,
      profile.taluka_id,
      profile.village_id,
      profile.bio,
      profile.phoneNo
    ];

    let completed =
      fields.filter(x => x).length;

    return Math.round(
      (completed / fields.length) * 100
    );
  }

  downloadBiodata() {

    const body = {

      customer_id:
        localStorage.getItem(
          'customerId'
        )

    };

    this.http.post(

      'http://localhost:8081/api/biodata/download',

      body,

      {
        responseType: 'blob'
      }

    ).subscribe((pdf: any) => {

      const blob =
        new Blob(
          [pdf],
          {
            type: 'application/pdf'
          }
        );

      const url =
        window.URL.createObjectURL(blob);

      window.open(url);

    });

  }

  logout() {

    localStorage.clear();

    this.router.navigate(['/login']);

  }

}