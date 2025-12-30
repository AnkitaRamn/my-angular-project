import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
    username = 'Test User1';

    changeUserName(){
      this.username = 'Test User2 Update';
    }
}
