import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
@Injectable({
    providedIn:'root'

})
export class postServices{
    constructor( private readonly http:HttpClient){}
    public url='https://api-sales-app.josetovar.dev/posts'

    public newPost(data:any):Observable<any>{
        return this.http.post(`${this.url}`,data)
    }
    public getPost(username:any):Observable<any>{
        return this.http.get(`${this.url}/${username}`)
    }
    public sendComment(body:any):Observable<any>{
        return this.http.post('https://api-sales-app.josetovar.dev/comments',body)
    }
}