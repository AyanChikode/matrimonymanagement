import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  customerName = 'Customer';

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {

    const profile =
      JSON.parse(
        localStorage.getItem('profile') || '{}'
      );

    if(profile.customerName){

      this.customerName =
        profile.customerName;

    }

  }

  logout(){

    localStorage.clear();

    this.router.navigate(['/login']);

  }

}