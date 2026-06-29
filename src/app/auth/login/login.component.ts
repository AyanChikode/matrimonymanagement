import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  loginForm = this.fb.group({

  role: ['CUSTOMER'],

  email: ['', Validators.required],

  password: ['', Validators.required]

});

 login() {

  this.authService.login(this.loginForm.value)
.subscribe({

  next:(res:any)=>{

    console.log(res);

    localStorage.setItem(
      'token',
      res.token
    );

    localStorage.setItem(
      'customerId',
      res.data.id.toString()
    );

    localStorage.setItem(
      'customerName',
      res.data.customerName
    );

    this.router.navigate([
      '/customer-dashboard'
    ]);
  },

      error: () => {

        alert(
          'Invalid Credentials'
        );

      }

    });

}
}