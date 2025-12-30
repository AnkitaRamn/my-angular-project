import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { CounterComponent } from './component/counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,WelcomeComponent,CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-angular-19';
}
