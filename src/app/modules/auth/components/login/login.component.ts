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
  isWrongInput = false;
  isDisabled = false;

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
      this.isDisabled = true;
      if(this.loginForm.value.username === '123456' && this.loginForm.value.password === '123456'){
           localStorage.setItem('empToken', '123456')
           this.router.navigate(['/emp/dashboard']);
      } else{
        this.isDisabled = false;
        this.isWrongInput = true;
         setTimeout(()=>{
          this.isWrongInput = false;
         },3000)
      }
    // TODO: Implement login logic here.

    
  }

}
