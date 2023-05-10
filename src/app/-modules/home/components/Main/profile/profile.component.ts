import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, merge } from 'rxjs';
import { profileServices } from 'src/app/-core/http/profile.services';
import { GetFunctionService } from 'src/app/-core/services/subjects/subject.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class profileComponent implements OnInit {
  constructor(private readonly profileService: profileServices,
    @Inject(GetFunctionService) 
    private readonly sendFunction:GetFunctionService,
    private readonly router:Router,
    private readonly activeRoute:ActivatedRoute) {}
  public propic: any;
  public viewFriends=false;
  public showEdit=false;
  public userData: any = [];
  public showUpdates=false;
  public clickEventFuction:Subscription=this.sendFunction.getClickEvent().subscribe(()=>{
this.getData()
  })
  ngOnInit(): void {
  this.activeRoute.queryParams.subscribe(params=>{
    console.log(params)
      if(params['username']){
        this.viewFriends=true;
      this.profileService.getProfile(params['username']).subscribe({
        next:(response)=>{
          this.userData=response;
          this.propic = `https://api-sales-app.josetovar.dev/pictures/${response.picture}`
          this.showEdit=true;
        }
      })
      }
      else{
        this.getData();
      }
    
  })
  }
  public getData(){
    this.profileService.getProfilebyLogin().subscribe({
      next: (res) => {
        this.userData = res;
        this.propic = `https://api-sales-app.josetovar.dev/pictures/${res.picture}`;
      
      },
    });
  }
  public closeChild(){
    this.showUpdates=false;
  }
  public addPost(){
    this.router.navigate(['home/profile/new'],{queryParams:{post:'profile_pic'},})
        }
}
