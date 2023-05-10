import { Component,OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { friendsService } from "src/app/-core/http/friends.services";
import { userServices } from "src/app/-core/services/user.service";

@Component({
    selector:'app-friends',
    templateUrl:'./friends.component.html'
    
})
export class friendsComponent implements OnInit{
constructor(private readonly service:friendsService,
    private readonly activeRoute:ActivatedRoute,
    private readonly router:Router){

}
public totalFriends!:number
public friends:any=[];
ngOnInit(): void {
this.activeRoute.params.subscribe(params=>{
    if(params['username1']){

    }else{
        this.service.getFriendProfile().subscribe({
            next:(res:any)=>{
                this.friends=res;
                this.totalFriends=res.length;
            }
        })
    }
})
    
}
public getInfo(username:string){
    this.router.navigate(['home/profile'],{queryParams:{username},queryParamsHandling:'merge'})
}

}