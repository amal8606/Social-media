import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { profileServices } from 'src/app/-core/http/profile.services';
import { GetFunctionService } from 'src/app/-core/services/subjects/subject.service';
import { toastrService } from 'src/app/-core/services/toastr.services';

@Component({
  selector: 'app-udpateProfile',
  templateUrl: './updateProfile.component.html',
})
export class updateProfileComponent implements OnInit {
  constructor(private readonly api: profileServices,
    @Inject(GetFunctionService)
    private readonly getFunction:GetFunctionService,
    private readonly toastr:toastrService) {}
  public updateProfile: boolean = false;

  public updateForm: FormGroup = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    username: new FormControl(''),
    about: new FormControl(''),
    email: new FormControl(''),
    birthday: new FormControl(''),
    picture: new FormControl(''),
  });
  @Output() closeEvent= new EventEmitter();
  close():void{
this.closeEvent.emit();
  }
  ngOnInit(): void {
    this.api.getProfilebyLogin().subscribe({
      next: (res) => {
        this.updateForm.setValue(res);
      },
    });
  }
  update() {
    const body = this.updateForm.value;
    console.log(body);
    this.api.updateProfile(body).subscribe({
      next: (res) => {
        console.log(res);
        this.getFunction.sendClickEvent()
        this.toastr.showSuccess('profile updated successfully')
        this.close()
    
      },
      error: () => {},
    });
  }
}
