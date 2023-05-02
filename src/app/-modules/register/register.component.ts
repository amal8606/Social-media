import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { toastrService } from 'src/app/-core/services/toastr.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  constructor(private readonly toastr:toastrService) {}
  public options: any[] = [];
  public months: any[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  public dates: any[] = [];
public selected:boolean=false;
public todayDate!:number;
public month!:string;
public currentYear!:number;
  public registerForm:FormGroup=new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),


  })
  submit(){
    console.log(this.registerForm.value)
  }
  public showWarning(message:string){
    this.toastr.showWarning(message)
  }
  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.currentYear=currentYear
    this.todayDate=new Date().getDate()
    for (let i = currentYear - 80; i <= currentYear; i++) {
      this.options.push(i);
    }
    for (let date = 1; date <= 31; date++) {
      this.dates.push(date);
    }
    
  }
}
