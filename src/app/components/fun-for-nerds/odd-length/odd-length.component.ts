import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-odd-length',
  standalone: true,
  imports: [],
  templateUrl: './odd-length.component.html',
  styleUrl: './odd-length.component.scss'
})
export class OddLengthComponent {
  @Input() words: string[] = [];
  @Input() partialWords: string = '';
}
