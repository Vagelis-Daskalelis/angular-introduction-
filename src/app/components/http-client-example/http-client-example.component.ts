import { Component, OnInit, inject } from '@angular/core';
import { chuckNorrisJoke, dadJoke } from 'src/app/shared/interfaces/jokes';
import { JokesService } from 'src/app/shared/services/jokes.service';
import {MatCardModule} from '@angular/material/card'
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton
  ],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.scss'
})
export class HttpClientExampleComponent implements OnInit {
  jokesService = inject(JokesService)
  dadJoke = ''
  chuckNorrisJoke: string = ''

  ngOnInit(): void {

    this.refreshDadJoke();
    // this.jokesService.getDadJoke().subscribe((data : dadJoke)=>{
    //   console.log(data.joke);
    //   this.dadJoke = data.joke;
    // })

    // this.jokesService.getDadJoke().subscribe((data 
    //{value: string})=>{
    //   console.log(data.value)
    // })

    // this.jokesService.getChuckNorrisJoke().subscribe((data:chuckNorrisJoke)=>{console.log(data.value);
    //   this.chuckNorrisJoke = data.value;
    // })
    this.refreshChuckNorrisJoke();
  }

  refreshDadJoke(){
    this.jokesService.getDadJoke().subscribe((data : dadJoke)=>{
      this.dadJoke = data.joke;
    })
  }
  
  refreshChuckNorrisJoke(){
    this.jokesService.getChuckNorrisJoke().subscribe((data:chuckNorrisJoke)=>{
      this.chuckNorrisJoke = data.value;
    })
  }
}
