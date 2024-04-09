import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { chuckNorrisJoke, dadJoke } from '../interfaces/jokes';

const DAD_JOKES_API_URL = 'https://icanhazdadjoke.com/';
const CHUCK_NORRIS_JOKES_API_URL = 'https://api.chucknorris.io/jokes/random';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  http: HttpClient = inject(HttpClient)

  getDadJoke() {
    return this.http.get<dadJoke>(DAD_JOKES_API_URL, {
      headers: {
        Accept: 'application/json'
      },
    });
  }

  getChuckNorrisJoke(){
    return this.http.get<chuckNorrisJoke>(CHUCK_NORRIS_JOKES_API_URL, {
      headers: {
        Accept: 'application/json'
      },
    });
  }
}
