import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn:'root'
})
export class loginQuard implements CanActivate, CanActivateChild{
    constructor(private readonly authService:AuthService,
        private readonly router:Router){

    }
    get(){
        this.authService.isAccessTokenExpired().subscribe(res=>{
            if(res==false){
                this.router.navigate(['login']);
                return false;
            }
            else{
                return true;
            }
        })
 
    }
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): any {
        this.get();
   }
   canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): any {
    this.get();
  }
}