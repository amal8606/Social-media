import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { userServices } from './-core/services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { toastrService } from './-core/services/toastr.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates:true,
      iconClasses:{error:'toast-warning'}
    
    }),

  ],
  providers: [userServices,toastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
