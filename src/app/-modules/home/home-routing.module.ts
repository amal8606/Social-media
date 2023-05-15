import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginQuard } from 'src/app/-core/quards/login.guard';
import { feedsComponent } from './components/Main/feeds/feeds.component';
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
      { path: 'feeds', component: feedsComponent},
      {
        path: '',
        component: profileComponent,canActivateChild:[loginQuard],
        children: [
          {path:'timeline',component:timeLineComponent,runGuardsAndResolvers: 'paramsOrQueryParamsChange'},
          
          { path: 'about', component: aboutComponent },
          { path: '', redirectTo: 'timeline', pathMatch: 'full' },
          { path: 'friends', component: friendsComponent },
          {path:'photos',component:photoComponent},
        ],
      },

      {path: '',component:feedsComponent },
      
     
      {path:'friends-req',component:newFriendsComponent}
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
