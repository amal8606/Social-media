import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { feedsComponent } from './components/Main/feeds/feeds.component';
import { mainComponent } from './components/Main/main.component';
import { aboutComponent } from './components/Main/profile/pages/about/about.component';
import { friendsComponent } from './components/Main/profile/pages/friends/friends.component';
import { photoComponent } from './components/Main/profile/pages/photos/photo.component';
import { profileComponent } from './components/Main/profile/profile.component';
import { rightNavComponent } from './components/Nav-right/rightNav.component';
import { navBarComponent } from './components/navBar/navBar.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GuardInterceptor,  } from 'src/app/-core/interceptor/token.interceptor';
import { updateProfileComponent } from './components/Main/profile/pages/update_profile/updateProfile.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    mainComponent,
    navBarComponent,
    rightNavComponent,
    feedsComponent,
    profileComponent,
    aboutComponent,
    friendsComponent,
    photoComponent,
    updateProfileComponent
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: GuardInterceptor, multi: true },
  ]
})
export class HomeModule { }
