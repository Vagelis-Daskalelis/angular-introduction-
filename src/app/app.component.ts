import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = "Vagelis"

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
