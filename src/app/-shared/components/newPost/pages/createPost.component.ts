import { Component, ElementRef, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { postServices } from 'src/app/-core/http/post.service';
import { profileServices } from 'src/app/-core/http/profile.services';
import { GetFunctionService } from 'src/app/-core/services/subjects/subject.service';
import { toastrService } from 'src/app/-core/services/toastr.services';

@Component({
  selector: 'app-create',
  templateUrl: './createPost.component.html',
})
export class createPostComponent {
  constructor(
    private readonly uplpoadPorfile: profileServices,
    @Inject(GetFunctionService)
    private readonly getFunction: GetFunctionService,
    private readonly router: Router,
    private readonly toastr: toastrService,
    private readonly activeRoute: ActivatedRoute,
    private readonly postImage: postServices
  ) {}

  @ViewChild('content') content!: ElementRef;
  @Output() close=new EventEmitter();

  public showImg = false;
  public selectedFile!: File;
  public imgPrev!: string;
  public onFileSelected(event: any) {
    this.selectedFile = event.target.files.item(0);
    const reader = new FileReader();
    reader.onload = () => {
      this.imgPrev = reader.result as string;
    };
    reader.readAsDataURL(this.selectedFile);
    this.showImg = true;
  }
  public createPost() {
    this.activeRoute.queryParams.subscribe((params) => {
      if (params['username']) {
        this.uplpoadPorfile.postPic(this.selectedFile).subscribe({
          next: (res) => {
            if (res) {
              this.toastr.showSuccess(
                'profile picture updadated successfully..'
              );
              this.close.emit();
              this.getFunction.sendClickEvent();
            }
          },
          error: () => {
            this.toastr.showError('error!....');
          },
        });
      }
       else {
        const content = this.content.nativeElement.value;
        const formData: FormData = new FormData();
        formData.append('content', content);
        formData.append('file', this.selectedFile, this.selectedFile.name);

        this.postImage.newPost(formData).subscribe({
          next: (res) => {
            console.log(res);
            this.close.emit();
        this.toastr.showSuccess('new post added successfully...')

          },
          error:()=>{
            this.toastr.showError('something went wrong please try again later')
          }
        });
 
    }});
  }
  public closeModal(){
    this.close.emit()
  }
}
