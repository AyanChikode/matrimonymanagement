import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

       constructor( 
        private fb: FormBuilder,
        private authservice: AuthService,
        private router: Router
       ){}

       form =this.fb.group({
        email:['']
       });

       sendOtp() {

  const data = {
    email: this.form.value.email
  };

  this.authservice.sendAdminOtp(data)
  .subscribe({

    next: () => {

      localStorage.setItem(
        'verifyEmail',
        data.email || ''
      );

      localStorage.setItem(
        'resetPassword',
        'true'
      );

      this.router.navigate([
        '/otp-verification'
      ]);

    },

    error: () => {

      // agar admin me nahi mila to customer check karo

      this.authservice.sendCustomerOtp(data)
      .subscribe({

        next: () => {

          localStorage.setItem(
            'verifyEmail',
            data.email || ''
          );

          localStorage.setItem(
            'resetPassword',
            'true'
          );

          this.router.navigate([
            '/otp-verification'
          ]);

        },

        error: () => {

          alert('Email Not Found');

        }

      });

    }

  });

}

}
