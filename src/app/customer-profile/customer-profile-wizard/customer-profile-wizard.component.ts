import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerProfileService } from '../services/customer-profile.service';
import { LookupService } from 'src/app/services/lookup.service';

@Component({
  selector: 'app-customer-profile-wizard',
  templateUrl: './customer-profile-wizard.component.html',
  styleUrls: ['./customer-profile-wizard.component.css']
})
export class CustomerProfileWizardComponent implements OnInit {

  currentStep = 1;

  states:any[]=[];
  districts:any[]=[];
  talukas:any[]=[];
  villages:any[]=[];

  religions:any[]=[];
  castes:any[]=[];
  subcastes:any[]=[];

  imagePreview:any='';

  constructor(
    private fb: FormBuilder,
    private profileService: CustomerProfileService,
    private lookupService: LookupService
  ) {}

  profileForm = this.fb.group({

    customer_id:['',Validators.required],

    customerName:['',Validators.required],

    age:['',Validators.required],

    gender:['',Validators.required],

    phoneNo:['',Validators.required],

    maritalStatus:['',Validators.required],

    religion_id:['',Validators.required],

    caste_id:['',Validators.required],

    subcaste_id:['',Validators.required],

    state_id:['',Validators.required],

    district_id:['',Validators.required],

    taluka_id:['',Validators.required],

    village_id:['',Validators.required],

    city:['',Validators.required],

    education:['',Validators.required],

    occupation:['',Validators.required],

    income:['',Validators.required],

    height:['',Validators.required],

    bio:[''],

    profilePhoto:['']

  });

  ngOnInit(): void {

    this.loadLookups();

  }

  loadLookups(){

    this.lookupService.getStates()
      .subscribe((res:any)=>this.states=res);

    this.lookupService.getDistricts()
      .subscribe((res:any)=>this.districts=res);

    this.lookupService.getTalukas()
      .subscribe((res:any)=>this.talukas=res);

    this.lookupService.getVillages()
      .subscribe((res:any)=>this.villages=res);

    this.lookupService.getReligions()
      .subscribe((res:any)=>this.religions=res);

    this.lookupService.getCastes()
      .subscribe((res:any)=>this.castes=res);

    this.lookupService.getSubcastes()
      .subscribe((res:any)=>this.subcastes=res);

  }

  nextStep(){

    if(this.currentStep < 6){

      this.currentStep++;

    }

  }

  previousStep(){

    if(this.currentStep > 1){

      this.currentStep--;

    }

  }

  onFileSelected(event:any){

    const file = event.target.files[0];

    if(file){

      const reader = new FileReader();

      reader.onload = () => {

        this.imagePreview = reader.result;

        this.profileForm.patchValue({

          profilePhoto: reader.result as string

        });

      };

      reader.readAsDataURL(file);

    }

  }

  submitProfile(){

    if(this.profileForm.invalid){

      alert('Please fill all required fields');

      return;

    }

    this.profileService
      .saveProfile(this.profileForm.value)
      .subscribe({

        next:()=>{

          alert('Profile Created Successfully');

          this.profileForm.reset();

          this.currentStep = 1;

        },

        error:(err)=>{

          console.log(err);

        }

      });

  }

}