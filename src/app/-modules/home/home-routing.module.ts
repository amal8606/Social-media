import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { profileComponent } from './components/Main/profile/profile.component';
import { feedsComponent } from './components/Main/feeds/feeds.component';
import { aboutComponent } from './components/Main/profile/pages/about/about.component';
import { friendsComponent } from './components/Main/profile/pages/friends/friends.component';
import { photoComponent } from './components/Main/profile/pages/photos/photo.component';
import { createPostComponent } from './components/Main/feeds/pages/createPost.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'profile',
        component: profileComponent,
        children: [
          {path:'new',component:createPostComponent},
          { path: 'about', component: aboutComponent },
          { path: '', redirectTo: 'about', pathMatch: 'full' },
          { path: 'friends', component: friendsComponent },
          {path:'photos',component:photoComponent}
        ],
      },
      {path: '', redirectTo: 'feeds', pathMatch: 'full' },
      {path:'new',component:createPostComponent},
      { path: 'feeds', component: feedsComponent,children:[{path:'new',component:createPostComponent}] },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
