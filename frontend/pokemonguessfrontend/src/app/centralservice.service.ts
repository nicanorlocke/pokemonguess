import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentralserviceService {

  private welcomeVisible=new BehaviorSubject<boolean>(true);
  private difficultyVisible=new BehaviorSubject<boolean>(false);
  private gameVisible=new BehaviorSubject<boolean>(false);
  private messagetext=new BehaviorSubject<string>('');
  private scoreVisible=new BehaviorSubject<boolean>(false);
  private enviarPuntaje=new BehaviorSubject<number>(0);


  welcomevisible=this.welcomeVisible.asObservable();
  difficultyvisible=this.difficultyVisible.asObservable();
  gamevisible=this.gameVisible.asObservable();
  messageText=this.messagetext.asObservable();
  scorevisible=this.scoreVisible.asObservable();
  enviarpuntaje=this.enviarPuntaje.asObservable();



  constructor() { }


  welcomeVision(state:boolean){
    this.welcomeVisible.next(state);
  }

  difficultyVision(state:boolean){
    this.difficultyVisible.next(state);
  }

  gameVision(state:boolean)
  {
    this.gameVisible.next(state);
  }

  changeMessage(m:string){
    this.messagetext.next(m);
  }

  scoreVision(state:boolean){
    this.scoreVisible.next(state);
  }

  sendScore(n:number){
    this.enviarPuntaje.next(n);

  }

}
