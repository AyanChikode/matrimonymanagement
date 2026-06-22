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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { NewPasswordComponent } from './auth/new-password/new-password.component';
import { AuthInterceptor } from './interceptors/jwt.interceptor';
import { CustomerProfilesComponent } from './admin/customer-profiles/customer-profiles.component';
import { CustomerProfileWizardComponent } from './customer-profile/customer-profile-wizard/customer-profile-wizard.component';
import { PersonalDetailsComponent } from './customer-profile/steps/personal-details/personal-details.component';
import { ReligionDetailsComponent } from './customer-profile/steps/religion-details/religion-details.component';
import { AddressDetailsComponent } from './customer-profile/steps/address-details/address-details.component';
import { EducationDetailsComponent } from './customer-profile/steps/education-details/education-details.component';
import { PhotoUploadComponent } from './customer-profile/steps/photo-upload/photo-upload.component';
import { PreviewSubmitComponent } from './customer-profile/steps/preview-submit/preview-submit.component';
import { ProfileViewComponent } from './customer/profile-view/profile-view.component';
import { PartnerProfileComponent } from './customer/partner-profile/partner-profile.component';
import { SentInterestsComponent } from './customer/interests/sent-interests/sent-interests.component';
import { ReceivedInterestsComponent } from './customer/interests/received-interests/received-interests.component';
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
    CustomerProfilesComponent,
    CustomerProfileWizardComponent,
    PersonalDetailsComponent,
    ReligionDetailsComponent,
    AddressDetailsComponent,
    EducationDetailsComponent,
    PhotoUploadComponent,
    PreviewSubmitComponent,
    ProfileViewComponent,
    PartnerProfileComponent,
    SentInterestsComponent,
    ReceivedInterestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
