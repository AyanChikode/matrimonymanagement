import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html'
})
export class NewPasswordComponent {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  passwordForm = this.fb.group({

    newPassword: ['']

  });

  updatePassword() {

    const data = {

      email: localStorage.getItem(
        'verifyEmail'
      ),

      newPassword:
        this.passwordForm.value.newPassword

    };

    this.authService
      .resetPassword(data)
      .subscribe({

        next: () => {

          alert(
            'Password Updated Successfully'
          );

          localStorage.removeItem(
            'verifyEmail'
          );

          localStorage.removeItem(
            'resetPassword'
          );

          this.router.navigate([
            '/login'
          ]);

        },

        error: () => {

          alert(
            'Password Update Failed'
          );

        }

      });

  }

}