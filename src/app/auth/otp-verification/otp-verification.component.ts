import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html'
})
export class OtpVerificationComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  otpForm = this.fb.group({

    email: [''],
    otp: ['']

  });

  ngOnInit(): void {

    const email =
      localStorage.getItem('verifyEmail');

    this.otpForm.patchValue({
      email: email
    });

  }

  verifyOtp() {

  this.authService
    .verifyOtp(this.otpForm.value)
    .subscribe({

      next: (res:any) => {

        alert('OTP Verified Successfully');

        const isResetPassword =
          localStorage.getItem('resetPassword');

        if(isResetPassword){

             localStorage.removeItem('resetPassword');

             this.router.navigate(['/new-password']);

        }
        else{

              localStorage.removeItem('verifyEmail');

              this.router.navigate(['/']);

            }

      },

      error: () => {

        alert('Invalid OTP');

      }

    });

}

}