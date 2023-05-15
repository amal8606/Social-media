import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { commentsComponents } from "./components/comments/comments.components";
import { createPostComponent } from "./components/newPost/pages/createPost.component";

@NgModule({
    imports:[CommonModule],
    declarations:[commentsComponents,createPostComponent],
    exports:[commentsComponents,createPostComponent]
})
export class sharedModule{ }