import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { CourseListComponent } from './course-list/course-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { TutorProfileComponent } from './tutor/tutor-profile/tutor-profile.component';
import { HeaderComponent } from './nav/header/header.component';

const routes : Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'courses', component: CourseListComponent, children: [
    { path: ':id', component: CourseDetailsComponent }
  ]},
  { path: 'login_signup', component: LoginSignupComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    CourseListComponent,
    DashboardComponent,
    HeaderComponent,
    CourseDetailsComponent,
    TutorProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
