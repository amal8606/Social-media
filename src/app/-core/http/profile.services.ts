import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
@Injectable({
    providedIn:'root'

})
export class profileServices{
    constructor( private readonly http:HttpClient){}
    public userName!:string;
    public url= 'https://api-sales-app.josetovar.dev/profile'
    public getProfile(username:string):Observable<any>{
        return this.http.get(`${this.url}/${username}`)
    }
    public getProfilebyLogin():Observable<any>{
        return this.http.get(this.url)
    }
    public postPic(file:File):Observable<any>{
        const formData:FormData=new FormData();
        formData.append('file',file,file.name);
        console.log(formData)

        return this.http.post(`${this.url}/picture`,formData);
    }
    public updateProfile(data:any):Observable<any>{
        return this.http.post(`${this.url}`,data)
    }



}
