import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { postServices } from 'src/app/-core/http/post.service';
import { loadCommentsService } from 'src/app/-core/services/subjects/comments.subject';
import { GetFunctionService } from 'src/app/-core/services/subjects/subject.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeLine.component.html',
})
export class timeLineComponent implements OnInit {
  constructor(
    private readonly postService: postServices,
    private readonly router: Router,
    private readonly activeRoute: ActivatedRoute,
    private readonly getFunction: GetFunctionService,
    private readonly getFunctionService: loadCommentsService
  ) {}
  public clickEvent: Subscription = this.getFunctionService
    .getClickEvent1()
    .subscribe(() => {
      
        this.getData();
      
    });
  public showComments = false;
  public selectedPostIndex!: number;
  public username!: string;
  ngOnInit(): void {
   this.getData();
  }

  public posts: any = [];
  // public getFriendData() {
  //   this.postService.getPost(this.username).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.posts = res;
  //       this.posts.sort((a: any, b: any) => {
  //         return (
  //           new Date(b.post.created_at).getTime() -
  //           new Date(a.post.created_at).getTime()
  //         );
  //       });
  //     },
  //   });
  // }
  public getData() {
    this.getFunction.sendClickEvent();
    this.activeRoute.params.subscribe({
      next: (params) => {
        const username = params['username'];
        this.postService.getPost(username).subscribe({
          next: (res) => {
            this.posts = res;
            this.posts.sort((a: any, b: any) => {
              return (
                new Date(b.post.created_at).getTime() -
                new Date(a.post.created_at).getTime()
              );
            });
          },
        });
      },
    });
  }

  getTime(created_at: string): string {
    const now = new Date();
    const createdDate = new Date(created_at);
    const age = Math.round(
      (now.getTime() - createdDate.getTime()) / (1000 * 60)
    );
    const newTime = Math.round(age / 60);
    if (age < 60) {
      return `${age} minutes ago`;
    } else if (newTime < 24) {
      return `${newTime} hours ago`;
    } else if (newTime < 42) {
      return `1 day ago`;
    } else {
      return `${Math.round(newTime / 24)} days ago`;
    }
  }
  showComment(index: any) {
    this.selectedPostIndex = index;
    this.showComments = true;
  }
}
