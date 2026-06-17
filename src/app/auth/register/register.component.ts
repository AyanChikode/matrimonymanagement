import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  registerForm = this.fb.group({

    role: ['CUSTOMER'],

    customerName: [''],
    email: [''],
    password: [''],
    phoneNo: ['']

  });

  register() {

    const role = this.registerForm.value.role;

    if (role === 'ADMIN') {

      this.authService.adminRegister(this.registerForm.value)
      .subscribe({

        next: (res: any) => {

          const emailData = {
            email: this.registerForm.value.email
          };

          this.authService.sendAdminOtp(emailData)
          .subscribe({

            next: () => {

              localStorage.setItem(
                'verifyEmail',
                this.registerForm.value.email || ''
              );

              alert('Admin OTP Sent Successfully');

              this.router.navigate(['/otp-verification']);

            },

            error: (err) => {

              console.log(err);
              alert('OTP Sending Failed');

            }

          });

        },

        error: (err) => {

          console.log(err);
          alert('Admin Registration Failed');

        }

      });

    } else {

      this.authService.register(this.registerForm.value)
      .subscribe({

        next: (res: any) => {

          const emailData = {
            email: this.registerForm.value.email
          };

          this.authService.sendCustomerOtp(emailData)
          .subscribe({

            next: () => {

              localStorage.setItem(
                'verifyEmail',
                this.registerForm.value.email || ''
              );

              alert('Customer OTP Sent Successfully');

              this.router.navigate(['/otp-verification']);

            },

            error: (err) => {

              console.log(err);
              alert('OTP Sending Failed');

            }

          });

        },

        error: (err) => {

          console.log(err);
          alert('Customer Registration Failed');

        }

      });

    }

  }

}