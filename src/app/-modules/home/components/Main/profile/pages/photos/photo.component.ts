import { Component,OnInit } from "@angular/core";
import { userServices } from "src/app/-core/services/user.service";

@Component({
    selector:'app-photo',
    templateUrl:'./photo.component.html'
})
export class photoComponent implements OnInit{
    constructor(private readonly service:userServices){}
    public images:any[]=[]
    ngOnInit(): void {
        this.images=this.service.photos
    }
}