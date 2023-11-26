import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  results:any;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.data.subscribe((res:any) =>{
      this.results = res.pokemon.pokemon.results;
      console.log(res.pokemon.pokemon.results);

    })
  }
}
