import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { mainComponent } from './components/Main/main.component';
import { navBarComponent } from './components/navBar/navBar.component';
import { rightNavComponent } from './components/Nav-right/rightNav.component';
import { feedsComponent } from './components/Main/feeds/feeds.component';
import { profileComponent } from './components/Main/profile/profile.component';
import { aboutComponent } from './components/Main/profile/pages/about/about.component';
import { friendsComponent } from './components/Main/profile/pages/friends/friends.component';
import { photoComponent } from './components/Main/profile/pages/photos/photo.component';


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
    photoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
