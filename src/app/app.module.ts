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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import { SidebarComponent } from './customer/sidebar/sidebar.component';
import { NavbarComponent } from './customer/navbar/navbar.component';
import { MyProfileComponent } from './customer/my-profile/my-profile.component';
import { SearchProfilesComponent } from './customer/search-profiles/search-profiles.component';
import { MutualMatchesComponent } from './customer/mutual-matches/mutual-matches.component';
import { ChatComponent } from './customer/chat/chat.component';
import { NotificationsComponent } from './customer/notifications/notifications.component';
import { AdminCustomersComponent } from './pages/admin-customers/admin-customers.component';
import { AdminProfilesComponent } from './pages/admin-profiles/admin-profiles.component';
import { AdminInterestsComponent } from './pages/admin-interests/admin-interests.component';
import { AdminChatComponent } from './pages/admin-chat/admin-chat.component';
import { AdminNotificationsComponent } from './pages/admin-notifications/admin-notifications.component';
import { AdminReportsComponent } from './pages/admin-reports/admin-reports.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
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
    CustomerLayoutComponent,
    SidebarComponent,
    NavbarComponent,
    MyProfileComponent,
    SearchProfilesComponent,
    MutualMatchesComponent,
    ChatComponent,
    NotificationsComponent,
    AdminCustomersComponent,
    AdminProfilesComponent,
    AdminInterestsComponent,
    AdminChatComponent,
    AdminNotificationsComponent,
    AdminReportsComponent,
    AdminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
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
