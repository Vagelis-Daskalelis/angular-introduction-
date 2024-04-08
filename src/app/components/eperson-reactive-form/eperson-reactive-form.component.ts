import { Component, EventEmitter, Output, output } from '@angular/core';
import {MatFormField} from '@angular/material/input'
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button'
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { EPerson } from 'src/app/shared/interfaces/person';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-eperson-reactive-form',
  standalone: true,
  imports: [  
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatSelectModule,
    MatButtonModule],
  templateUrl: './eperson-reactive-form.component.html',
  styleUrl: './eperson-reactive-form.component.scss'
})
export class EpersonReactiveFormComponent {
  @Output() person = new EventEmitter<EPerson>()

  form = new FormGroup({
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    age: new FormControl(18, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(100)
    ]),
    email: new FormControl('' , [Validators.required, Validators.email]),
    education: new FormControl('', Validators.required)
  })

  onSubmit(value: any){
    this.person.emit(value as EPerson);
    this.form.reset();
  }
}
