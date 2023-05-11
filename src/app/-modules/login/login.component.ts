import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { accessServices } from 'src/app/-core/http/aceess.services';
import { toastrService } from 'src/app/-core/services/toastr.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
constructor(private readonly apiService:accessServices,
  private readonly toastr:toastrService,
  private readonly router:Router
  ){}
public emailRequired=false;
public passwordRequired=false;

public loginForm:FormGroup=new FormGroup({
  email:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required)
})
submit(){
  const data=this.loginForm.value;
 this.apiService.login(data).subscribe({
  next:(res)=>{
    if(res){
      this.toastr.showSuccess('Login successFull')
      console.log(res)
      this.router.navigate(['feeds'])
      localStorage.setItem('access_token',JSON.stringify(res.access_token))
    }
  },
  error:()=>{
    this.toastr.showError("email / password does not exist..")
  }
 })

}
}
