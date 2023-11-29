import { ActivatedRouteSnapshot, Resolve, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { Observable, forkJoin, map, of } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class  PokemonResolver {
  constructor( private service: PokemonService) { }
  resolve(): Observable<any> {
    let pokemon = of({});

    pokemon = this.service.getpokemon();

    return forkJoin(pokemon).pipe(map((res) => {
      let pokemon = res[0];
      return { pokemon};
    }));

  }
};
