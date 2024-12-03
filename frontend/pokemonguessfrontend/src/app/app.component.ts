import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomepageComponent } from "./welcomepage/welcomepage.component";
import { DifficultyComponent } from "./difficulty/difficulty.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomepageComponent, DifficultyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemonguessfrontend';
}