import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postServices } from 'src/app/-core/http/post.service';
import { GetFunctionService } from 'src/app/-core/services/subjects/subject.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
})
export class photoComponent implements OnInit {
  constructor(
    private readonly service: postServices,
    private readonly activeRoute: ActivatedRoute,
    private readonly getFunction: GetFunctionService
  ) {}
  public images: any[] = [];
  ngOnInit(): void {
    this.activeRoute.params.subscribe(param=>{
      console.log(param)
      if(param['username1']){
        const username = param['username1'];
        this.service.getPost(username).subscribe({
          next: (res) => {
            this.images = res;
          },
        });
      }
      else{
        this.getData();
      }
     
    })
    
  }
  getData(){
    this.getFunction.sendClickEvent();
    this.activeRoute.params.subscribe({
      next: (params) => {
        const username = params['username'];
        this.service.getPost(username).subscribe({
          next: (res) => {
            this.images = res;
          },
        });
      },
    });
  }
}