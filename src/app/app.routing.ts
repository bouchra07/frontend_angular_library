import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { CreateBookComponent } from './landing/create-book/create-book.component';
import { SearchBookComponent } from './landing/search-book/search-book.component';
import { UpdateBookComponent } from './landing/update-book/update-book.component';


const routes: Routes =[
    { path: 'landing',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'home',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'add',          component: CreateBookComponent },
    { path: 'update/:id', component: UpdateBookComponent },
    { path: 'search/:search', component: SearchBookComponent },


    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
