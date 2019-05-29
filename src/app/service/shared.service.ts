import { Injectable, EventEmitter, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  @Output() aToggleEvent = new EventEmitter<string>();
  @Output() showComponentEvent = new EventEmitter<string>();

  toggle(msg: string) {
    this.aToggleEvent.emit(msg);
  }

  showComponent(msg:string){
    this.showComponentEvent.emit(msg);
  }
}
