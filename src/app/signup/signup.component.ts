import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    form: any = {};
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    constructor(private authService: AuthService) { }

    ngOnInit() {}
    onSubmit() {
        this.authService.register(this.form).subscribe(
          data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
          },
          err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
          }
        );
    }
}
