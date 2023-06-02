import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn:'root'

})
export class darkModeService{
constructor(){
const mode=localStorage.getItem('dark');
if(mode!=null){
  this.dark.next(JSON.parse(mode));
}
}
public dark:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)
public toggleDarkMode(){
  localStorage.setItem('dark',JSON.stringify(!this.dark.value));
  this.dark.next(!this.dark.value);
}
public getCurrrentMode():Observable<boolean>{
  return this.dark.asObservable();
}
}
