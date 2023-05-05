import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn:'root'
})
export class loginQuard implements CanActivate, CanActivateChild{
    constructor(private readonly authService:AuthService,
        private readonly router:Router){

    }
    get(){
        if(this.authService.isAccessTokenExpired()==false){
            this.router.navigate(['/login'])
        return false
        }
        else{
            return true
        }
    }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
return this.get();
}
canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return this.get();
}
}