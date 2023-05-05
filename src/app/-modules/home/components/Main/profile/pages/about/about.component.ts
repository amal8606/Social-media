import { Component ,OnInit} from '@angular/core';
import { GetFunctionService } from 'src/app/-core/services/subjects/subject.service';
@Component({
    selector:'app-about',
    templateUrl:'./about.component.html'
})
export class aboutComponent implements OnInit{
    constructor(private readonly functionCall:GetFunctionService){}
    ngOnInit(): void {
        this.functionCall.sendClickEvent()
    }

}