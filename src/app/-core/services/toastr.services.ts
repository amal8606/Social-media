import { Injectable, inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
@Injectable({
    providedIn:'root'

}
)
export class toastrService{
    constructor(private readonly toast:ToastrService){}
    public showWarning(message:string){
this.toast.info(`${message} is required...`,'warning',{timeOut:3000,positionClass:'toast-top-center',closeButton:true,
progressBar:true,})
    }
    public showSuccess(message:string){
        this.toast.success(message)
    }
    public showError(message:string){
        this.toast.error(message)
    }

}