import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DashboardService } from './dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(
    private dashboardService: DashboardService
  ) {}

  getDashboardData() {

    return forkJoin({

      customers:
        this.dashboardService.getCustomers(),

      admins:
        this.dashboardService.getAdmins(),

      consultancies:
        this.dashboardService.getConsultancies(),

      states:
        this.dashboardService.getStates(),

      districts:
        this.dashboardService.getDistricts(),

      talukas:
        this.dashboardService.getTalukas(),

      villages:
        this.dashboardService.getVillages(),

      religions:
        this.dashboardService.getReligions(),

      castes:
        this.dashboardService.getCastes(),

      subcastes:
        this.dashboardService.getSubcastes(),

      customerProfiles:
        this.dashboardService.getCustomerProfiles(),

    });

  }

}