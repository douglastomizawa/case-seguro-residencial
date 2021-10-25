import { DadosPessoaisService } from '../../shared/dados-pessoais.service';
import { Component, OnInit } from '@angular/core';
import { PersonalDataFactoryService } from 'src/app/core/factories/personal-data-factory.service';
import { HomeDataService } from 'src/app/core/factories/home-data.service';
import { SizeModalService } from 'src/app/core/factories/size-modal.service';

@Component({
  selector: 'app-infos-seguro-home',
  templateUrl: './infos-seguro-home.component.html',
  styleUrls: ['./infos-seguro-home.component.scss']
})
export class InfosSeguroHomeComponent implements OnInit {
  personalDataValues: any;
  homeDataValues: any;
  inputIsFilled!: boolean;
  fullPrice!: string;
  simulationTyped!: string;
  constructor(
    private modalOpeningClose: SizeModalService,
    private personalData: DadosPessoaisService,
    private personalDataFactory: PersonalDataFactoryService,
    private homeDataService: HomeDataService,
  ) { }

  ngOnInit(): void {
    this.homeDataValues = {id: 0, };
    if (window.screen.width < 1020) {
      this._dataExecutionPersonalData();
      this._dataExecutionHomeData();
      this._changedValue();
    }
    this.personalData.nextStepClicked.subscribe(res => {
      if (res) {
        this._dataExecutionPersonalData();
      }
    });
    this.homeDataService.nextStepInfoHome.subscribe(res =>{
      if (res) {
        this._dataExecutionHomeData();
        this._changedValue();
      }
    });
  }
  private _dataExecutionPersonalData(): any {
    this.personalDataValues = this.personalDataFactory.personalDataSaved;
    this.inputIsFilled = this.personalData.filledInputs;
  }
  private _changedValue(){
    this.simulationTyped = this.homeDataService.simulationType;
    if (this.homeDataService.simulationType === 'valor') {
      this.fullPrice = this.homeDataService.priceHomeInsurance;

    }

  }
  private _dataExecutionHomeData(): any {
    this.homeDataValues = this.homeDataService.homeDataSaved;
  }
  private _transform(value: any, args?: any): any {
    return Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value);
  }
  public closeInfosHomeInsurance(): any {
    this.modalOpeningClose.modalOpening.close(InfosSeguroHomeComponent);
  }
}
