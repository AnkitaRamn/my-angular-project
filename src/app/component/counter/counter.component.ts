import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})


export class CounterComponent {

  constructor(){
    effect(()=>{
      console.log('Counter value changed:',this.counter());
      setTimeout(()=>{
        this.counter.set(0 );
      },2000)
    });
      
  }
  counter = signal<number>(1);
  num = signal<CounterState>({
    count : 0
  });

  num2 = computed(()=>this.num().count * 2);
  doubleCounter = computed(()=> this.counter() * 2);

  incrementCounter(){
    this.num.update(state => ({
      count: state.count + 1
    }));
  //  this.num2 = computed(()=>this.num().count * 2);
  //  this.counter.set(this.counter() + 1);
   this.counter.update(counter => counter + 1);
  //  this.doubleCounter = computed(()=> this.counter() * 2);
  }

  decrementCount() {
    this.num.update(state => ({
      count: state.count - 1
    }));
    // this.num2 = computed(()=>this.num().count * 2);
    // this.counter.set(this.counter() - 1);
    this.counter.update(counter => counter - 1);
    // this.doubleCounter = computed(()=> this.counter() * 2);
  }
}

interface CounterState {
  count: number;
}
