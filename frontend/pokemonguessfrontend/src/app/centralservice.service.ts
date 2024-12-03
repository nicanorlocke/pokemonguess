import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentralserviceService {

  private welcomeVisible=new BehaviorSubject<boolean>(true);
  private difficultyVisible=new BehaviorSubject<boolean>(false);
  private gameVisible=new BehaviorSubject<boolean>(false);

  welcomevisible=this.welcomeVisible.asObservable();
  difficultyvisible=this.difficultyVisible.asObservable();
  gamevisible=this.gameVisible.asObservable();

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

}
