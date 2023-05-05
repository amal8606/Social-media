import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { profileServices } from 'src/app/-core/http/profile.services';
import { GetFunctionService } from 'src/app/-core/services/subjects/subject.service';
import { userServices } from 'src/app/-core/services/user.service';

@Component({
    selector:'app-right-nav',
    templateUrl:'./rightNav.component.html'
})
export class rightNavComponent{
    constructor(private readonly userService:userServices,
        private readonly getProfileService:profileServices,
        private readonly getFunction:GetFunctionService){}
    public searchFriend:boolean=false;
    public data:any[]=this.userService.users
    public userData:any=[];
    public clickEvent:Subscription=this.getFunction.getClickEvent().subscribe(()=>{
        this.getData()
    })
    
    ngOnInit(): void {
      this.getData()
    }
    public getData(){
        this.getProfileService.getProfilebyLogin().subscribe({
            next:(res)=>{
                this.userData=res;
            }
                  })
    }
}