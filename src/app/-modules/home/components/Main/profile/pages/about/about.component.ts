import { Component ,OnInit} from '@angular/core';
import { profileServices } from 'src/app/-core/http/profile.services';
import { GetFunctionService } from 'src/app/-core/services/subjects/subject.service';
@Component({
    selector:'app-about',
    templateUrl:'./about.component.html'
})
export class aboutComponent implements OnInit{
    constructor(private readonly functionCall:GetFunctionService,
        private readonly profileService:profileServices){}
        public data:any=[];
    ngOnInit(): void {
        this.functionCall.sendClickEvent()
        this.profileService.getProfilebyLogin().subscribe({
            next:(res)=>{
                this.data=res;

            }
        })
    }

}