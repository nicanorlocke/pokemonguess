import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CentralserviceService } from '../centralservice.service';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-startgame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './startgame.component.html',
  styleUrl: './startgame.component.css'
})
export class StartgameComponent {
  pokeid:number=0;
  pokegif:string='';
  pokename:string='';
  isVisible:boolean=false;

  constructor (private central:CentralserviceService, private pokeapi:PokeapiService){

  }

  ngOnInit(){
    this.central.gamevisible.subscribe(
      (state)=>{
        this.isVisible=state;
      }
    );
    this.pokeid=this.generateRandomInteger(1,151);
    this.pokeapi.getpokemon(this.pokeid).subscribe(
      (data)=>{
        console.log('Pokemon Data:', data);
          this.pokegif=data.sprites.versions['generation-v']['black-white'].animated.front_default;
          this.pokename=data.name;
      }
    );
  }

  generateRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
