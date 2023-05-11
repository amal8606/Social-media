import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
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
this.activeRoute.queryParams.subscribe(params=>{
  if(params['username']){
    this.getFriendData(params['username'])
  }
  else{
    this.getData()

  }
})
  })
public username!:string;
  ngOnInit(): void {
  this.activeRoute.queryParams.subscribe(params=>{
      if(params['username']!=this.username){
        const username=params['username']
  this.getFriendData(username)
  this.showEdit=false;
      }
      else{
        this.getData();
      }
    
  })
  
  }
  public getFriendData(username:string){
    this.profileService.getProfile(username).subscribe({
      next:(response)=>{
        this.userData=response;
        this.propic = `https://api-sales-app.josetovar.dev/pictures/${response.picture}`
      }
    })
  }
  public getData(){
    this.profileService.getProfilebyLogin().subscribe({
      next: (res) => {
        console.log(res.username)
        this.username=res.username;
        this.userData = res;
        this.propic = `https://api-sales-app.josetovar.dev/pictures/${res.picture}`;
        this.showEdit=true;
       
      },
    });
  }
  public closeChild(){
    this.showUpdates=false;
  }
  public addPost(){
    this.router.navigate(['home/profile/new'],{queryParams:{post:'profile_pic'},})
        }
        public route(username:string){
          this.router.navigate([`home/profile/timeline/${username}`],{queryParams:{username}})
        }
}
