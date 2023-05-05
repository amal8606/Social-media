import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { accessServices } from 'src/app/-core/http/aceess.services';
import { toastrService } from 'src/app/-core/services/toastr.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  constructor(
    private readonly toastr: toastrService,
    private readonly apiService: accessServices,
    private readonly navigate:Router
  ) {}
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

  public selected: boolean = false;
  public selectedDate!: any;
  public todayDate!: number;
  public month!: string;
  public currentYear!: number;
  public registerForm: FormGroup = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
  });
  @ViewChild('date') dateOption!: ElementRef;
  @ViewChild('month') monthOption!: ElementRef;
  @ViewChild('year') yearOption!: ElementRef;

  submit() {
    const data = this.registerForm.value;
    this.apiService.register(data).subscribe({
      next: (res) => {
        if (res) {
          this.toastr.showSuccess('account created successfully..');
        }
        console.log(res);
this.navigate.navigate(['../'])

      },
      error: () => {
        this.toastr.showError('account not created..');
      },
    });
  }
  public showWarning(message: string) {
    this.toastr.showWarning(message);
  }
  updateDob() {
    const date = this.dateOption.nativeElement.value;
    const month = this.monthOption.nativeElement.value;
    const year = this.yearOption.nativeElement.value;
    console.log(date, month, year);
    const dob = `${date}-${month}-${year}`.toString();
    const birthdayControl = this.registerForm.get('birthday');
    if (birthdayControl) {
      birthdayControl.setValue(dob);
    }
  }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.currentYear = currentYear;
    this.todayDate = new Date().getDate();
    for (let i = currentYear - 80; i <= currentYear; i++) {
      this.options.push(i);
    }
    for (let date = 1; date <= 31; date++) {
      this.dates.push(date);
    }
  }
}
