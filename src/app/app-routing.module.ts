import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonResolver } from './pokemon/pokemon.resolver';

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent,
    resolve: {pokemon:PokemonResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
