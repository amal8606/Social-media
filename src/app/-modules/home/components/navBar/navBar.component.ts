import { Component, OnInit } from '@angular/core';
import { profileServices } from 'src/app/-core/http/profile.services';
@Component({
    selector:'app-navBar',
    templateUrl:'./navBar.component.html'
})
export class navBarComponent implements OnInit{
    constructor(private readonly getProfileService:profileServices){}
    public data:any=[];
    ngOnInit(): void {
      this.getProfileService.getProfilebyLogin().subscribe({
next:(res)=>{
    this.data=res;
}
      })
    }
    
}