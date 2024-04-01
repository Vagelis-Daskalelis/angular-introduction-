import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.scss'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Vagelis',
    surName: 'Daskalelis',
    age: 25,
    email: 'vagelis.aueb@.gr',
    address: 'Athens, Greece',
  };

  person1: Person = {
    givenName: 'John',
    surName: 'Doe',
    age: 55,
    email: 'john.aueb@.gr',
    address: 'NEW YORK, USA',
  };
}
