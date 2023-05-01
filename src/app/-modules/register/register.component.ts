import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
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
  constructor() {}
  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 80; i <= currentYear; i++) {
      this.options.push(i);
    }
    for (let date = 1; date <= 31; date++) {
      this.dates.push(date);
    }
  }
}
