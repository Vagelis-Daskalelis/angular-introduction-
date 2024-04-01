import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-simple-datatable',
  standalone: true,
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.scss'
})
export class SimpleDatatableComponent {
  @Input() data: EPerson[];
}
