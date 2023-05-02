import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { profileComponent } from './components/Main/profile/profile.component';
import { feedsComponent } from './components/Main/feeds/feeds.component';
import { aboutComponent } from './components/Main/profile/pages/about/about.component';
import { friendsComponent } from './components/Main/profile/pages/friends/friends.component';
import { photoComponent } from './components/Main/profile/pages/photos/photo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'profile',
        component: profileComponent,
        children: [
          { path: 'about', component: aboutComponent },
          { path: '', redirectTo: 'about', pathMatch: 'full' },
          { path: 'friends', component: friendsComponent },
          {path:'photos',component:photoComponent}
        ],
      },
      { path: '', component: feedsComponent},
      { path: 'feeds', component: feedsComponent },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
