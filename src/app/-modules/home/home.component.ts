import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
constructor(private readonly router:Router){}
  ngOnInit(): void {
//     const access_token=localStorage.getItem('access_token')
//     if(!access_token){
// this.router.navigate(['register'])
//     }
  }
}
