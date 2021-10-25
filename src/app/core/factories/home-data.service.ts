import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {
  homeDataSaved: object = new Object();
  nextStepInfoHome = new EventEmitter();
  allInfosHomeFilled = new EventEmitter();
  priceHomeInsurance!: any;
  simulationType!: string;
  fullPriceInsurance!: string;

  constructor() { }
  public createHomeData(homeData: object): any{
    this.homeDataSaved = homeData;
  }
}
