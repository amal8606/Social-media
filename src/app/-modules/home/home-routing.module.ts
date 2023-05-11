import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginQuard } from 'src/app/-core/quards/login.guard';
import { feedsComponent } from './components/Main/feeds/feeds.component';
import { createPostComponent } from './components/Main/feeds/pages/createPost.component';
import { newFriendsComponent } from './components/Main/friends/friends.component';
import { aboutComponent } from './components/Main/profile/pages/about/about.component';
import { friendsComponent } from './components/Main/profile/pages/friends/friends.component';
import { photoComponent } from './components/Main/profile/pages/photos/photo.component';
import { timeLineComponent } from './components/Main/profile/pages/timeline/timeLine.component';
import { profileComponent } from './components/Main/profile/profile.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivateChild:[loginQuard],
    children: [
     
      {
        path: 'profile',
        component: profileComponent,canActivateChild:[loginQuard],
        children: [
          {path:'friends/:username',component:profileComponent},
          {path:'timeline/:username',component:timeLineComponent,runGuardsAndResolvers: 'paramsOrQueryParamsChange'},
          {path:'new',component:createPostComponent},
          { path: 'about', component: aboutComponent },
          { path: '', redirectTo: 'about', pathMatch: 'full' },
          { path: 'friends', component: friendsComponent },
          {path:'photos/:username',component:photoComponent},
        ],
      },

      {path: '', redirectTo: 'feeds', pathMatch: 'full' },
      {path:'new',component:createPostComponent},
      { path: 'feeds', component: feedsComponent,children:[{path:'new',component:createPostComponent}] },
      {path:'friends',component:newFriendsComponent}
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
