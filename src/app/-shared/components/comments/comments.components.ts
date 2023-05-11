import {
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { postServices } from 'src/app/-core/http/post.service';
import { loadCommentsService } from 'src/app/-core/services/subjects/comments.subject';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})
export class commentsComponents implements OnInit {
  constructor(
    private readonly postService: postServices,
    @Inject(loadCommentsService)
    private readonly getFunSevice: loadCommentsService
  ) {}
  public comments: any[] = [];
  @Input() postData!: any;
  @Output() newEvent = new EventEmitter<any>();
  @ViewChild('content') content!: ElementRef;

  public close() {
    this.newEvent.emit();
  }

  ngOnInit(): void {
    this.loadData();
    console.log(this.postData)
  }
  public loadData() {
    this.postData?.comments.forEach((comment: any) => {
      this.comments.push(comment);
    });
  }
  sendComments(post_id: number) {
    const content = this.content.nativeElement.value;
    const body = { post_id, content };
    console.log(body)
    this.postService.sendComment(body).subscribe({
      next: (res) => {
        console.log(res);
        this.getFunSevice.sendClickEvent1();
        this.loadData();
      },
    });
  }
}
