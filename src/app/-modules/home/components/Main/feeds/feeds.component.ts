import { Component } from '@angular/core';
import { userServices } from 'src/app/-core/services/user.service';
@Component({
    selector:'app-feeds',
    templateUrl:'./feeds.component.html'
})
export class feedsComponent{
    constructor(private readonly userService:userServices){}
   
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
}