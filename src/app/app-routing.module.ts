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
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import { MyProfileComponent } from './customer/my-profile/my-profile.component';
import { SearchProfilesComponent } from './customer/search-profiles/search-profiles.component';
import { ProfileViewComponent } from './customer/profile-view/profile-view.component';
import { SentInterestsComponent } from './customer/interests/sent-interests/sent-interests.component';
import { ReceivedInterestsComponent } from './customer/interests/received-interests/received-interests.component';
import { MutualMatchesComponent } from './customer/mutual-matches/mutual-matches.component';
import { ChatComponent } from './customer/chat/chat.component';
import { NotificationsComponent } from './customer/notifications/notifications.component';
import { AdminReportsComponent } from './pages/admin-reports/admin-reports.component';
import { AdminNotificationsComponent } from './pages/admin-notifications/admin-notifications.component';
import { AdminChatComponent } from './pages/admin-chat/admin-chat.component';
import { AdminInterestsComponent } from './pages/admin-interests/admin-interests.component';
import { AdminProfilesComponent } from './pages/admin-profiles/admin-profiles.component';
import { AdminCustomersComponent } from './pages/admin-customers/admin-customers.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CustomerManagementComponent } from './admin/customer-management/customer-management.component';

const routes: Routes = [

  { path: '', component: LoginComponent },

  { path:'login', component:LoginComponent},

  { path:'register', component: RegisterComponent},

  { path: 'dashboard', component: DashboardComponent },

  { path:'otp-verification', component: OtpVerificationComponent },

  { path:'admin-dashboard', component: AdminDashboardComponent },

  {
  path: '',
  component: AdminLayoutComponent,
  children: [

    {
      path:'admin-dashboard',
      component:AdminDashboardComponent
    },

   {
  path:'admin-customers',
  component:CustomerManagementComponent
},

    {
      path:'admin-profiles',
      component:AdminProfilesComponent
    },

    {
      path:'admin-interests',
      component:AdminInterestsComponent
    },

    {
      path:'admin-chat',
      component:AdminChatComponent    
    },

    {
      path:'admin-notifications',
      component:AdminNotificationsComponent
    },

    {
      path:'admin-reports',
      component:AdminReportsComponent
    }

  ]
},

   {
    path: '',
    component: CustomerLayoutComponent,
    children: [

      {
        path: 'customer-dashboard',
        component: CustomerDashboardComponent
      },

      {
        path: 'my-profile',
        component: MyProfileComponent
      },

      {
        path: 'create-profile',
        component: CustomerProfileWizardComponent
      },

      {
        path: 'partner/:id',
        component: PartnerProfileComponent
      },

      {
  path:'search-profiles',
  component:SearchProfilesComponent
      },

     
{
  path:'profile/:id',
  component: ProfileViewComponent
},

{
  path: 'sent-interests',
  component: SentInterestsComponent
},

{
  path: 'received-interests',
  component: ReceivedInterestsComponent
},
{
 path:'mutual-matches',
 component:MutualMatchesComponent
},

{
  path: 'chat', component: ChatComponent
},

{
 path:'notifications',
 component:NotificationsComponent
}

    ]
  },
  
  { path:'forgot-password', component: ForgotPasswordComponent },

  { path: 'new-password',component: NewPasswordComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}