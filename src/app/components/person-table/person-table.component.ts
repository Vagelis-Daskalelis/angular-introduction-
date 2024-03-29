import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.scss'
})
export class PersonTableComponent {

  person ={
    givenName: 'Vagelis',
    surName: 'Daskalelis',
    age: 25,
    email: 'vagelis.aueb@.gr',
  };
}
