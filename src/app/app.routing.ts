import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateBookComponent } from './home/create-book/create-book.component';
import { SearchBookComponent } from './home/search-book/search-book.component';
import { UpdateBookComponent } from './home/update-book/update-book.component';


const routes: Routes =[
   
    { path: 'register',           component: SignupComponent },
    { path: 'home',          component: HomeComponent },
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
