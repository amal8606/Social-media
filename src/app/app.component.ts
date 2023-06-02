import { Component } from '@angular/core';
import { darkModeService } from './-core/services/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'facebook-app';
  constructor(
    private readonly darkMode:darkModeService){}
  
  public dark!:boolean;
  ngOnInit(): void {
    this.darkMode.getCurrrentMode().subscribe(value=>{
      this.dark=value
    })
  }
  
}
