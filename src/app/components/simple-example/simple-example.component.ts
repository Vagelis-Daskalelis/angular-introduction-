import { Component } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { ManyPerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-simple-example',
  standalone: true,
  imports: [SimpleDatatableComponent],
  templateUrl: './simple-example.component.html',
  styleUrl: './simple-example.component.scss'
})
export class SimpleExampleComponent {
  manyperson = ManyPerson;
}
