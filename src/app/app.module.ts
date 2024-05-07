import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentHomeComponent } from './modules/student/components/student-home/student-home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
//card modules
import { MatCardModule } from '@angular/material/card';

// Butto n  Modules
import { MatButtonModule } from '@angular/material/button';

// From  Modules 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

// Http service
import { HttpClientModule } from '@angular/common/http';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';

// custom components 
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { AdminAboutComponent } from './modules/admin/components/admin-about/admin-about.component';
import { authInterceptor } from './auth/service/auth.interceptor';
import { StudentDashboardComponent } from './modules/student/components/student-dashboard/student-dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminAllCustomersComponent } from './modules/admin/components/admin-all-customers/admin-all-customers.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AdminAllAccountsComponent } from './modules/admin/components/admin-all-accounts/admin-all-accounts.component';
import { AdminBankDetailsComponent } from './modules/admin/components/admin-bank-details/admin-bank-details.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import { NewAccountComponent } from './modules/student/components/new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentHomeComponent,
    SignInComponent,
    SignUpComponent,
    AdminDashboardComponent,
    AdminAboutComponent,
    StudentDashboardComponent,
    AdminAllCustomersComponent,
    AdminAllAccountsComponent,
    AdminBankDetailsComponent,
    NewAccountComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatListModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatStepperModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    authInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
