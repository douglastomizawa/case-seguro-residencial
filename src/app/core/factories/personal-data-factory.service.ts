import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataFactoryService {
  personalDataSaved: object = new Object();
  constructor() { }
  public createPersonalData(personalData: object): any{
    this.personalDataSaved = personalData;
  }
}
