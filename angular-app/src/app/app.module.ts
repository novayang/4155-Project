import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AuthGuard} from './guard/auth.guard';

const appRoutes: Routes = [
    {path:'',           component: HomeComponent},
    {path:'register',   component: RegisterComponent},
    {path:'login',      component: LoginComponent},
    {path:'dashboard',  component: DashboardComponent, },
    {path:'profile',    component: ProfileComponent,},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FlashMessagesModule,
        FormsModule,
        HttpModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
