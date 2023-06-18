import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.isLoading = true;
      if(this.loginForm.invalid){
        return;
      }
      if(this.loginForm.value.username === 'fingent' && this.loginForm.value.password === 'fingent'){
           this.router.navigate(['/emp']);
      }
    // TODO: Implement login logic here.

    this.isLoading = false;
  }

}
