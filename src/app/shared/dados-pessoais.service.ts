import { Injectable, Output, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosPessoaisService {
  personalData: any;
  nextStepClicked = new EventEmitter();
  allInputsFilled = new EventEmitter();
  filledInputs!: boolean;
  constructor(

  ) { }
  public personalDataSave(data: any): any {
    this.allInputsFilled.subscribe(res => {
      if (res) {
        this.filledInputs = res;
      }
    });
    this.personalData = data;
    return this.personalData;
  }
}
