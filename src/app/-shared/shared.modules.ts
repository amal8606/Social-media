import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { commentsComponents } from "./components/comments/comments.components";

@NgModule({
    imports:[CommonModule],
    declarations:[commentsComponents],
    exports:[commentsComponents]
})
export class sharedModule{ }