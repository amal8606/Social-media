import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { mainComponent } from './components/Main/main.component';
import { navBarComponent } from './components/navBar/navBar.component';
import { rightNavComponent } from './components/Nav-right/rightNav.component';


@NgModule({
  declarations: [
    HomeComponent,
    mainComponent,
    navBarComponent,
    rightNavComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
