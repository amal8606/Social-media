import { Component,OnInit } from "@angular/core";
import { userServices } from "src/app/-core/services/user.service";

@Component({
    selector:'app-friends',
    templateUrl:'./friends.component.html'
    
})
export class friendsComponent implements OnInit{
constructor(private readonly service:userServices){

}
public friends:any[]=[];
ngOnInit(): void {
    this.friends=this.service.users
}
}
