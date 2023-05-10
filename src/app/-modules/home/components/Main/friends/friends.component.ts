import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { friendsService } from "src/app/-core/http/friends.services";

@Component({
    selector:'app-friends',
    templateUrl:'./friends.component.html'
})
export class newFriendsComponent implements OnInit{
constructor(private readonly friendService:friendsService){}
public friendsReq$!:Observable<any>
public totalReq!:number;
public allUsers$!:Observable<any>
ngOnInit(): void {
this.loadReq();
    this.getAllusers();
}
public loadReq(){
    this.friendService.getAllRequests().subscribe({
        next:(res)=>{
            console.log(res)
            this.friendsReq$=of(res.filter((item:any)=>item.status=='pending'))
            this.friendsReq$.subscribe({
                next:(res)=>{
                    this.totalReq=res.length;
                }
            })
        }
    })
    this.friendService.getFriendProfile().subscribe(res=>{
        // console.log(res)
    })
}
public getAllusers(){
    this.friendService.getAllUsers().subscribe({
        next:(res)=>{
            console.log(res)
            this.allUsers$=of(res)
        }
    })
}
public sendReq(username:string){
    this.friendService.sendReq(username).subscribe({
        next:(res)=>{
            console.log(res)
        }
    })
}
public acceptReq(username:string){
console.log(username)
this.friendService.acceptReq(username).subscribe({
    next:(res)=>{
        this.loadReq();
        this.getAllusers();
    

    }
})
}
}