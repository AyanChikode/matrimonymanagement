import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CustomerProfileService } from "src/app/services/customer-profile.service";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  profile:any={};

  constructor(
    private route: ActivatedRoute,
    private profileService: CustomerProfileService
  ){}

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.profileService
      .getProfileById(id)
      .subscribe({

        next:(res:any)=>{
          this.profile = res;
        }

      });

  }

}