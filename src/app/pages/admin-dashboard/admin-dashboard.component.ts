import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../../services/admin-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  totalCustomers = 0;
  totalAdmins = 0;
  totalConsultancies = 0;
  totalStates = 0;
  totalDistricts = 0;
  totalTalukas = 0;
  totalVillages = 0;
  totalReligions = 0;
  totalCastes = 0;
  totalSubcastes = 0;
  totalProfiles = 0;

  recentCustomers: any[] = [];

  constructor(
    private dashboardService: AdminDashboardService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loadDashboard();

  }

  loadDashboard() {

    this.dashboardService
      .getDashboardData()
      .subscribe({

        next: (res: any) => {

          this.totalCustomers =
            res.customers?.length || 0;

          this.totalAdmins =
            res.admins?.length || 0;

          this.totalConsultancies =
            res.consultancies?.length || 0;

          this.totalStates =
            res.states?.length || 0;

          this.totalDistricts =
            res.districts?.length || 0;

          this.totalTalukas =
            res.talukas?.length || 0;

          this.totalVillages =
            res.villages?.length || 0;

          this.totalReligions =
            res.religions?.length || 0;

          this.totalCastes =
            res.castes?.length || 0;

          this.totalSubcastes =
            res.subcastes?.length || 0;
            
          this.totalProfiles =
            res.customerProfiles?.length || 0;

          this.recentCustomers =
            res.customers?.slice(-5).reverse();

        },

        error: (err: any) => {
          console.log(err);
        }

      });

  }

  logout() {

  localStorage.clear();

  this.router.navigate(['/login']);

}

}