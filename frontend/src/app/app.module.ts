import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { CourseListComponent } from './course-list/course-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { TutorProfileComponent } from './tutor/tutor-profile/tutor-profile.component';
import { HeaderComponent } from './nav/header/header.component';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const routes : Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login_signup', component: LoginSignupComponent },
  { path: 'profile', component: TutorProfileComponent },
  { path: 'courses', component: CourseListComponent, children: [
    { path: ':id', component: CourseDetailsComponent }
  ]},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    CourseListComponent,
    DashboardComponent,
    HeaderComponent,
    CourseDetailsComponent,
    TutorProfileComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
