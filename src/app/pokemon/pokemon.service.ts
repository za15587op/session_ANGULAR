import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  constructor(private http: HttpClient) { }


   baseurl = "https://pokeapi.co/api/v2/pokemon"

   getpokemon(){
    return this.http.get(this.baseurl)
   }
}
