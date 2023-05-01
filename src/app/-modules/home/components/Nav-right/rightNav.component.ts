import { Component } from '@angular/core';
import { userServices } from 'src/app/-core/services/user.service';

@Component({
    selector:'app-right-nav',
    templateUrl:'./rightNav.component.html'
})
export class rightNavComponent{
    constructor(private readonly userService:userServices){}
    public searchFriend:boolean=false;
    public data:any[]=this.userService.users
}