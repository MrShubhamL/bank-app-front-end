import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { customerGuard } from './auth/service/guards/customer.guard';
import { StudentHomeComponent } from './modules/student/components/student-home/student-home.component';
import { AdminAboutComponent } from './modules/admin/components/admin-about/admin-about.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { adminGuard } from './auth/service/guards/admin.guard';
import { StudentDashboardComponent } from './modules/student/components/student-dashboard/student-dashboard.component';
import { AdminAllCustomersComponent } from './modules/admin/components/admin-all-customers/admin-all-customers.component';
import { AdminAllAccountsComponent } from './modules/admin/components/admin-all-accounts/admin-all-accounts.component';
import { AdminBankDetailsComponent } from './modules/admin/components/admin-bank-details/admin-bank-details.component';
import { NewAccountComponent } from './modules/student/components/new-account/new-account.component';

const routes: Routes = [
 
  {
    path: "registration",
    component: SignUpComponent
  },
  {
    path: "login",
    component: SignInComponent
  },
  {
    path: "customer-dashboard",
    component: StudentDashboardComponent,
    canActivate: [customerGuard],
    children:[
      {
        path: "home",
        component: StudentHomeComponent
      },
      {
        path: "new-account",
        component: NewAccountComponent
      }
    ]
  },
  {
    path: "admin-dashboard",
    component: AdminDashboardComponent,
    canActivate: [adminGuard],
    children:[
      {
        path: "all-customers",
        component: AdminAllCustomersComponent
      },
      {
        path: "all-accounts",
        component: AdminAllAccountsComponent
      },
      {
        path: "admin-bank-details",
        component: AdminBankDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
