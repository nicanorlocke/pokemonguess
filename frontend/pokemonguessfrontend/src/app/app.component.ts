import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomepageComponent } from "./welcomepage/welcomepage.component";
import { DifficultyComponent } from "./difficulty/difficulty.component";
import { StartgameComponent } from "./startgame/startgame.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomepageComponent, DifficultyComponent, StartgameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemonguessfrontend';
}
