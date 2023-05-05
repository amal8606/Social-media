import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginQuard } from './-core/quards/login.guard';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./-modules/home/home.module').then(m => m.HomeModule),canActivate:[loginQuard] },
{ path: '', loadChildren: () => import('./-modules/login/login.module').then(m => m.LoginModule)},
{ path: 'login', loadChildren: () => import('./-modules/login/login.module').then(m => m.LoginModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
