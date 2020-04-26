import { Component } from '@angular/core';
import  {lorem} from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'typing';
  randomSentence : string = lorem.sentence();
  enteredText:string = '';
  onInput(value:string) {
    this.enteredText = value
  }
  compare(randomLetter:string,enteredLetter:string) {
    if(!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct':'incorrect';
  }
}
