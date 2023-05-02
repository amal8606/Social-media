import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
constructor(){}
public emailRequired=false;
public passwordRequired=false;

public loginForm:FormGroup=new FormGroup({
  email:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required)
})
}
