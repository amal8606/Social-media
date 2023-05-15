import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { userServices } from './-core/services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { toastrService } from './-core/services/toastr.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { accessServices } from './-core/http/aceess.services';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { profileServices } from './-core/http/profile.services';
import { GuardInterceptor } from './-core/interceptor/token.interceptor';
import { GetFunctionService } from './-core/services/subjects/subject.service';
import { postServices } from './-core/http/post.service';
import { AuthService } from './-core/services/auth.service';
import { loginQuard } from './-core/quards/login.guard';
import { loadCommentsService } from './-core/services/subjects/comments.subject';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      iconClasses: { error: 'toast-warning' },
    }),
  ],
  providers: [
    userServices,
    toastrService,
    accessServices,
    profileServices,
    postServices,
    { provide: HTTP_INTERCEPTORS, useClass: GuardInterceptor, multi: true },
    GetFunctionService,
    AuthService,
    loginQuard,
    loadCommentsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
