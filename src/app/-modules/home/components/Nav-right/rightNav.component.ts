import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { friendsService } from 'src/app/-core/http/friends.services';
import { profileServices } from 'src/app/-core/http/profile.services';
import { GetFunctionService } from 'src/app/-core/services/subjects/subject.service';
import { userServices } from 'src/app/-core/services/user.service';

@Component({
  selector: 'app-right-nav',
  templateUrl: './rightNav.component.html',
})
export class rightNavComponent {
  constructor(
    private readonly userService: userServices,
    private readonly getProfileService: profileServices,
    private readonly getFunction: GetFunctionService,
    private readonly friendsService: friendsService,
    private readonly router:Router
  ) {}
  public searchFriend: boolean = false;
  public data: any = [];
  public userData: any = [];
  public clickEvent: Subscription = this.getFunction
    .getClickEvent()
    .subscribe(() => {
      this.getData();
    });

  ngOnInit(): void {
    this.getData();

  }
  public getData() {
    this.getProfileService.getProfilebyLogin().subscribe({
      next: (res:any) => {
      this.userData=res;
     
      },
    });
    this.friendsService.getFriendProfile().subscribe({
      next: (res:any) => {
        this.data = res.filter((obj:any,index:any,arr:any)=>{
          return arr.findIndex((item:any)=>item.username==obj.username)===index
        })
      },
    });
  }
  viewProfile(username:string){
    this.router.navigate(['timeline'],{queryParams:{username},queryParamsHandling:'merge'})
  }
}
