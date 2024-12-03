import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CentralserviceService } from '../centralservice.service';

@Component({
  selector: 'app-welcomepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcomepage.component.html',
  styleUrl: './welcomepage.component.css'
})
export class WelcomepageComponent {
  isVisible:boolean=true;

  constructor (private central:CentralserviceService){

  }
  ngOnInit(){
    this.central.welcomevisible.subscribe(
      (state)=>{
        this.isVisible=state;
      }
    );
  }

  showDiff(){
    this.central.difficultyVision(true);
    this.isVisible=false;
  }

}
