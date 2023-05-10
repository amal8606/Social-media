import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { friendsService } from 'src/app/-core/http/friends.services';
import { postServices } from 'src/app/-core/http/post.service';
import { userServices } from 'src/app/-core/services/user.service';
@Component({
    selector:'app-feeds',
    templateUrl:'./feeds.component.html'
})
export class feedsComponent implements OnInit{
    constructor(private readonly userService:userServices,
      private readonly router:Router,
      private readonly getFriends:friendsService,
      private readonly postsService:postServices){}
      public friendsData:any=[];
      public allPosts:any=[]
      post=[]
      friend=[]
    
   ngOnInit(): void {
     this.getFriends.getFriendProfile().subscribe({
      next:(res)=>{
        console.log(res)
        this.friendsData=res;
     
      }
     })
     this.friendsData.forEach((item:any)=>{
      this.postsService.getPost(item.username).subscribe({
        next:(res)=>{
          this.allPosts.push(res);
        
        }
      })
    })
    
   }
    public data:any[]=this.userService.users
    getTime(postCreatedAt: string): string {
      const now = new Date();
      const createdDate = new Date(postCreatedAt);
      const age = Math.round((now.getTime() - createdDate.getTime()) / (1000 * 60));
      const newTime=Math.round(age/60)
      if(age<60){
        return `${age} minutes ago`;
  
      }
      else if(newTime<24){
        
         return `${newTime} hours ago`
      }
      else if(newTime<42){
        return `1 day ago`
      }
      else{
        return `${Math.round(newTime/24)} days ago`
      }
    }
    public addPost(){
this.router.navigate(['home/feeds/new'],{queryParams:{post:'new'}})
    }
}