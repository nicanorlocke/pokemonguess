import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CentralserviceService } from '../centralservice.service';

@Component({
  selector: 'app-difficulty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './difficulty.component.html',
  styleUrl: './difficulty.component.css'
})
export class DifficultyComponent {

    isVisible:boolean=false;

    constructor (private central:CentralserviceService){

    }
    ngOnInit(){
      this.central.difficultyvisible.subscribe(
        (state)=>{
          this.isVisible=state;
        }
      );
    }

    showWelcome(){
      this.central.welcomeVision(true);
      this.isVisible=false;
    }

    startGame() {
      this.central.gameVision(true);
      this.isVisible=false;
    }


}
