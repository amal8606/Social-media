import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { postServices } from 'src/app/-core/http/post.service';
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
    private readonly getFunction:GetFunctionService
  ) {}
  ngOnInit(): void {
    this.getFunction.sendClickEvent();
    this.activeRoute.params.subscribe({
      next: (params) => {
        const username = params['username'];
        this.postService.getPost(username).subscribe({
          next: (res) => {
            this.posts = res;
          },
        });
      },
    });
  }
  public posts: any = [];

  getTime(postCreatedAt: string): string {
    const now = new Date();
    const createdDate = new Date(postCreatedAt);
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
}
