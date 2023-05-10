import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class friendsService{
    constructor(private readonly http:HttpClient){}
    public url='https://api-sales-app.josetovar.dev/friendships'
    public getAllRequests():Observable<any>{
       return this.http.get(`${this.url}/requests`)

    }
    public getFriendProfile(){
       return this.http.get(this.url)
    }
    public getAllUsers(){
        return this.http.get('https://api-sales-app.josetovar.dev/users')
    }
    public sendReq(username:string){
        return this.http.post(`${this.url}/send?username=${username}`,{});
    }
    public acceptReq(username:string):Observable<any>{

        return this.http.post(`${this.url}/accept?username=${username}`,{});
    }
}