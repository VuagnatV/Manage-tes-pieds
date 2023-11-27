import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InputText } from 'primeng/inputtext'
import { Button } from 'primeng/button';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  loginForm!: FormGroup;
  registrationForm!: FormGroup;
  login: boolean = true;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService,
  ) {
    //this.user$ = afAuth.authState;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required, , Validators.minLength(6)]
    });

    this.registrationForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required, , Validators.minLength(6)],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authService.login(email, password)

    } else if (this.registrationForm.valid) {
      const email = this.registrationForm.value.email;
      const password = this.registrationForm.value.password;

      this.authService.register(email, password)
    }
  }

  switch() {
    this.login = !this.login
  }

}
