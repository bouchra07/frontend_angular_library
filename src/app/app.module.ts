import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { LoginComponent } from './login/login.component';
import { CreateBookComponent } from './home/create-book/create-book.component';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './home/book-list/book-list.component';
import { BookDetailsComponent } from './home/book-details/book-details.component';
import { UpdateBookComponent } from './home/update-book/update-book.component';
import { SearchBookComponent } from './home/search-book/search-book.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CreateBookComponent,
    BookListComponent,
    BookDetailsComponent,
    UpdateBookComponent,
    SearchBookComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
