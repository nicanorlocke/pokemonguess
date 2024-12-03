import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CentralserviceService } from '../centralservice.service';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {
  scoreVisible:boolean=false;
  puntaje:number=0;
  constructor(private central:CentralserviceService){

  }

  ngOnInit (){
    this.central.scorevisible.subscribe(
      (state)=>{
        this.scoreVisible=state;
      }
    );

    this.central.enviarpuntaje.subscribe(
      (p)=>{
        this.puntaje=p;
      }
    );
  }



}
