import { Component } from '@angular/core';
import { OddLengthComponent } from '../odd-length/odd-length.component';
import { EvenLengthComponent } from '../even-length/even-length.component';
import { WordInputComponent } from '../word-input/word-input.component';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-fun-for-nerds',
  standalone: true,
  imports: [OddLengthComponent,EvenLengthComponent, WordInputComponent],
  templateUrl: './fun-for-nerds.component.html',
  styleUrl: './fun-for-nerds.component.scss'
})
export class FunForNerdsComponent {
  partialOddWord = ''
  partialEvenWord = ''
  oddLengthWord:string[] = []
  evenLengthWord:string[] = []
  onPartialWord(word:string){
    if (word.length % 2 === 0){
      this.partialEvenWord = word
      this.partialOddWord = ''
    }else{
      this.partialOddWord = word
      this.partialEvenWord = ''
    }
  }
  onWord(word:string){
    if (word.length % 2 === 0){
      this.evenLengthWord.push(word)
    }else{
      this.oddLengthWord.push(word)
    }
  }
}
