import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
@Injectable({
    providedIn:'root'

})
export class accessServices{
    constructor( private readonly http:HttpClient){}
    public url='https://api-sales-app.josetovar.dev/auth'
    public register(data:any):Observable<any>{
        return this.http.post(`${this.url}/register`,data)
    }
    public login(data:any):Observable<any>{
        return this.http.post(`${this.url}/login`,data)
    }
}