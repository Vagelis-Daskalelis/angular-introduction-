import { Component } from '@angular/core';
import { EPerson, ManyPerson } from 'src/app/shared/interfaces/person';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';


@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SimpleDatatableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.scss'
})
export class ComponentOutputExampleComponent {
  manyPerson = ManyPerson;

  onPersonClicked(person: EPerson){
    alert(this.personTemplate(person))
  }

  personTemplate(person: EPerson){
    return 
    `
    Person Details:

    FirstName: ${person.givenName}
    LastName: ${person.surName}
    Age: ${person.age}
    Email: ${person.email}
    Education: ${person.education}
    `
  }
}