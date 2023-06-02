import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { darkModeService } from 'src/app/-core/services/darkmode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent{
constructor(private readonly router:Router){}

public dark!:boolean;
// public theme:Subscription=this.darkMode.getClickEvent().subscribe(()=>{
//   this.dark=localStorage.getItem('dark')
// })


}
