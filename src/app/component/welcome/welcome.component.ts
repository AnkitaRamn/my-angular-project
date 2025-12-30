import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
    username = 'Test User1';
  //  let a = 80; not define like that
    b= 70;

    as:WritableSignal<number> = signal(20);
    bs = computed(()=> 70);
    changeUserName(){
      this.username = 'Test User2 Update';
    }

    onMouseOver(){
      console.log("When i hover mouse on button then this paragraph is print in console.\nThis is the paragraph...");
      console.log(this.as()+1,this.bs()+1);
      this.as.set(this.as() * 5);
    }

    doSum(a:number,b:number){
      // we can define let,const,var and other variable inside
      // the function but not inside the class
      let c: number | boolean = 70;
      let d = 90;

      console.log(a+b,c+d);
    }
}
