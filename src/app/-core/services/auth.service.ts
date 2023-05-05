import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    constructor() {}
  
    public isAccessTokenExpired():any{
      const accessToken = localStorage.getItem('access_token');
      if (accessToken) {
        return true;
      }
      else{
        return false

      }
    }
  
  }