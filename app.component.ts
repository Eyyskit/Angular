import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';

  voteCounter: number = 0;

  voteIncrease = () =>{
    this.voteCounter = this.voteCounter + 1;
  }

  voteDecrease = () =>{
    this.voteCounter = this.voteCounter - 1;
  }

  voteReset = () =>{
    this.voteCounter = 0;
  }

  voteCounter1: number = 0;

  voteIncrease1 = () =>{
    this.voteCounter1 = this.voteCounter1 + 1;
  }

  voteDecrease1 = () =>{
    this.voteCounter1 = this.voteCounter1 - 1;
  }

  voteReset1 = () =>{
    this.voteCounter1 = 0;
  }

  voteCounter2: number = 0;

  voteIncrease2 = () =>{
    this.voteCounter2 = this.voteCounter2 + 1;
  }

  voteDecrease2 = () =>{
    this.voteCounter2 = this.voteCounter2 - 1;
  }

  voteReset2 = () =>{
    this.voteCounter2 = 0;
  }

  voteCounter3: number = 0;

  voteIncrease3 = () =>{
    this.voteCounter3 = this.voteCounter3 + 1;
  }

  voteDecrease3 = () =>{
    this.voteCounter3 = this.voteCounter3 - 1;
  }

  voteReset3 = () =>{
    this.voteCounter3 = 0;
  }
}


