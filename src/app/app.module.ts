import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { OtpVerificationComponent } from './auth/otp-verification/otp-verification.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { DashboardComponent } from './customer/dashboard/dashboard.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { EditProfileComponent } from './customer/edit-profile/edit-profile.component';
import { SearchPartnerComponent } from './customer/search-partner/search-partner.component';
import { BiodataComponent } from './customer/biodata/biodata.component';
import { CustomerManagementComponent } from './admin/customer-management/customer-management.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { NewPasswordComponent } from './auth/new-password/new-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    OtpVerificationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    ProfileComponent,
    EditProfileComponent,
    SearchPartnerComponent,
    BiodataComponent,
    CustomerManagementComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    NewPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
