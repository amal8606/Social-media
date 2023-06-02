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
  constructor(
    private readonly profileService: profileServices,
    @Inject(GetFunctionService)
    private readonly sendFunction: GetFunctionService,
    private readonly router: Router,
    private readonly activeRoute: ActivatedRoute
  ) {}
  public propic: any;
  public viewFriends = false;
  public showEdit = true;
  public userData: any = [];
  public showUpdates = false;
  public addNewPost=false;
  public dark=localStorage.getItem('dark');
  public clickEventFuction: Subscription = this.sendFunction
    .getClickEvent()
    .subscribe(() => {
      this.activeRoute.queryParams.subscribe((params) => {
        this.getFriendData(params['username']);
      });
    });
  public username!: string;
  ngOnInit(): void {
    const access_token=localStorage.getItem('access_token')
    if(!access_token){
      console.log('no access..')
      this.router.navigate(['login']);
    }else
    this.activeRoute.queryParams.subscribe((params) => {
      const username = params['username'];

      this.getFriendData(username);
    });
  }
  public getFriendData(username: string) {
    this.profileService.getProfilebyLogin().subscribe((res) => {
      const loginUser = res.username;
      if (username != loginUser) {
        this.showEdit = false;
      } else {
        this.showEdit = true;
      }
    });

    this.profileService.getProfile(username).subscribe({
      next: (response) => {
        this.userData = response;
        this.propic = `https://api-sales-app.josetovar.dev/pictures/${response.picture}`;
      },
    });
  }
  public closeChild() {
    this.showUpdates = false;
  }
  public addPost() {
    this.router.navigate(['home/profile/new'], {
      queryParams: { post: 'profile_pic' },
    });
  }
 
}
