import { Injectable } from "@angular/core";
import { profileServices } from "../http/profile.services";
import { Observable, catchError, map,of  } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    constructor(private readonly getProfile:profileServices) {}
  
    public isAccessTokenExpired():Observable<boolean>{
      const accessToken = localStorage.getItem('access_token');
      if (accessToken) {
      return this.getProfile.getProfilebyLogin().pipe(
        map((res:any)=>{
          console.log(res)
          if(res){
            return true;
          }
          else{
      return false;
          }
        }),
        catchError((error:any)=>{
      
     return of(false)
        })
       )
      }
      else{
        return of(false)

      }
    }
  
  }


