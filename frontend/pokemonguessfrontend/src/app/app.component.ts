import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomepageComponent } from "./welcomepage/welcomepage.component";
import { DifficultyComponent } from "./difficulty/difficulty.component";
import { StartgameComponent } from "./startgame/startgame.component";
import { CentralserviceService } from './centralservice.service';
import { ScoreComponent } from "./score/score.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomepageComponent, DifficultyComponent, StartgameComponent, ScoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemonguessfrontend';
  mensaje:string='';
  
  constructor (private central:CentralserviceService){

  }
  ngOnInit(){
    this.central.messageText.subscribe(
      (mess)=>{
        this.mensaje=mess;
      }
    );
  }

}
