import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,WelcomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-angular-19';
}
