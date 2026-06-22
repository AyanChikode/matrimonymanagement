import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './customer/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { OtpVerificationComponent } from './auth/otp-verification/otp-verification.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './auth/new-password/new-password.component';
import { CustomerProfileWizardComponent } from './customer-profile/customer-profile-wizard/customer-profile-wizard.component';
import { PartnerProfileComponent } from './customer/partner-profile/partner-profile.component';

const routes: Routes = [

  { path: '', component: LoginComponent },

  { path:'login', component:LoginComponent},

  { path:'register', component: RegisterComponent},

  { path: 'dashboard', component: DashboardComponent },

  { path:'otp-verification', component: OtpVerificationComponent },

  { path:'admin-dashboard', component: AdminDashboardComponent },

  { path:'customer-dashboard', component: CustomerDashboardComponent },
  
  { path:'forgot-password', component: ForgotPasswordComponent },

  { path: 'new-password',component: NewPasswordComponent },

  { path:'create-profile',component:CustomerProfileWizardComponent },

  { path:'partner/:id', component:PartnerProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}