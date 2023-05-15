import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { friendsService } from 'src/app/-core/http/friends.services';
import { postServices } from 'src/app/-core/http/post.service';
import { loadCommentsService } from 'src/app/-core/services/subjects/comments.subject';
import { userServices } from 'src/app/-core/services/user.service';
@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
})
export class feedsComponent implements OnInit {
  constructor(
    private readonly userService: userServices,
    private readonly router: Router,
    private readonly getFriends: friendsService,
    private readonly postsService: postServices,
    private readonly reCallData: loadCommentsService
  ) {}
  public clickEvent: Subscription = this.reCallData
    .getClickEvent1()
    .subscribe(() => {
      this.loadData();
    });
  public allPosts: any = [];
  public uniqueUsername: any[] = [];
  public showComments = false;
  public selectedPostIndex!: number;
  public addNewPost=false;

  ngOnInit(): void {
    this.loadData();
  }
  public loadData() {
    this.getFriends.getFriendProfile().subscribe({
      next: (res: any) => {
        const data = (this.data = res.filter(
          (obj: any, index: any, arr: any) => {
            return (
              arr.findIndex((item: any) => item.username == obj.username) ===
              index
            );
          }
        ));
        data.forEach((item: any) => {
          this.getPosts(item);
        });
      },
    });
  }

  public getPosts(friend: any) {
    this.postsService.getPost(friend.username).subscribe({
      next: (res) => {
        const posts = res;
        const post = { friend, posts };
        this.allPosts.push(post);
  
      },
    });
  }
  public data: any[] = this.userService.users;
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
  public addPost() {
    this.router.navigate(['new'], { queryParams: { post: 'new' } });
  }
  showComment(index: any) {
    this.selectedPostIndex = index;
    this.showComments = true;
  }
}
