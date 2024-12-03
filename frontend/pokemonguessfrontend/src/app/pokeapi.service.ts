import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Pokemon {
  name: string;
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string; // The animated GIF URL
          };
        };
      };
    };
  };
}


@Injectable({
  providedIn: 'root'
})



export class PokeapiService {
  private apiurl='https://pokeapi.co/api/v2/pokemon/';
  constructor(private http:HttpClient) { }

  getpokemon(pokemonid:number):Observable<Pokemon>{

    return this.http.get<Pokemon>(`${this.apiurl}${pokemonid}`);

  }

}
