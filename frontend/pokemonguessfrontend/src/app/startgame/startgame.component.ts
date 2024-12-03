import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CentralserviceService } from '../centralservice.service';
import { PokeapiService } from '../pokeapi.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-startgame',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './startgame.component.html',
  styleUrl: './startgame.component.css'
})
export class StartgameComponent {
  pokeid:number=0;
  pokegif:string='';
  pokename:string='';
  isVisible:boolean=false;
  guessVisible:boolean=true;
  existingpokes:number[]=[];
  userguess:string='';
  contador:number=31;
  private countdownInterval: any;
  inputVisible:boolean=true;
  puntaje:number=0;
  constructor (private central:CentralserviceService, private pokeapi:PokeapiService){

  }

 


  ngOnInit(){
    this.central.gamevisible.subscribe(
      (state)=>{
        this.isVisible=state;
      }
    );

    this.pokeid=this.generateRandomInteger(1,151);
    
    while (this.verifpokeid(this.pokeid))
    {
      this.pokeid=this.generateRandomInteger(1,151);
    }    
    this.existingpokes.push(this.pokeid);
    this.pokeapi.getpokemon(this.pokeid).subscribe(
      (data)=>{
        console.log('Pokemon Data:', data);
          this.pokegif=data.sprites.versions['generation-v']['black-white'].animated.front_default;
          this.pokename=data.name;
      }
    );
   
   this.startCountdown();
    
  }

  ngOnDestroy(): void {
    this.clearCountdown(); // Cleanup interval when component is destroyed
  }

  generateRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  cambiarPoke(){

    if (this.correctName())
    {
      this.puntaje=this.puntaje+10;
      this.central.changeMessage('Acertaste');
    }
    else {
      this.central.changeMessage('Fallaste');
    }

    this.pokeid=this.generateRandomInteger(1,151);

    while (this.verifpokeid(this.pokeid))
      {
        this.pokeid=this.generateRandomInteger(1,151);
      }  

    this.pokeapi.getpokemon(this.pokeid).subscribe(
      (data)=>{
        console.log('Pokemon Data:', data);
          this.pokegif=data.sprites.versions['generation-v']['black-white'].animated.front_default;
          this.pokename=data.name;
      }
    );
    this.userguess='';

    
  }

  verifpokeid (currentid:number){
      return this.existingpokes.includes(currentid);
  }

  correctName(){
    return this.pokename==this.userguess;
  }

  startCountdown(): void {
    this.countdownInterval = setInterval(() => {
      if (this.contador > 0) {
        this.contador--;
      } else {
        this.clearCountdown();
        this.inputVisible=false;
        this.central.changeMessage("Se acabo el tiempo"); // Stop countdown at 0
        this.isVisible=false;
        this.central.scoreVision(true);
        this.central.sendScore(this.puntaje);
      }
    }, 1000); // Update every second
  }

  clearCountdown(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval); // Clear interval
    }
  }

}
