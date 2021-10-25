import { INITIAL_STATE_PERSISTENCIA_DATA, IResponseCobertura } from './../../../store/persistencia/persistencia.model';
import { take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeDataService } from 'src/app/core/factories/home-data.service';
import { SizeModalService } from 'src/app/core/factories/size-modal.service';
import { State, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.model';
import { Observable } from 'rxjs';
import { IReponsePersistencia } from 'src/app/store/persistencia/persistencia.model';
import { ISimuladorResponseData } from 'src/app/store/simulador-data/simulador-data.model';
import { FunctionsService } from 'src/app/shared/utils/functions.service';
import { ICoberturas } from 'src/app/core/interfaces/cobertura.interface';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  simulacaoData$: Observable<ISimuladorResponseData>
  listCoberturasSelected: any;
  listCoberturasIds: string[] = [];
  listTodasCoberturas: any;
  listTodasCoberturaslocal: any;
  presistenciaData: IReponsePersistencia | any  = INITIAL_STATE_PERSISTENCIA_DATA;
  presistenciaCoberturaData:  IResponseCobertura | any  = [];

  presistenciaData$: Observable<IReponsePersistencia>

  constructor(
    public dialog: MatDialog,
    protected store: Store<IAppState>,
    protected state: State<IAppState>,
    private sizeModal: SizeModalService,
    private functionsService: FunctionsService

  ) {
    this.simulacaoData$ = store.select((state: IAppState) => state.simuladorData);
    this.presistenciaData$ = store.select((state: IAppState) => state.presistenciaData);

    this.simulacaoData$.subscribe((simulacaoData: ISimuladorResponseData) => {
      this.listCoberturasSelected = simulacaoData.coberturasSend;
      this.listCoberturasIds = simulacaoData.coberturasIds;
      this.listTodasCoberturas = simulacaoData.todasCoberturas;

    })
    this.presistenciaData$.subscribe((presistenciaData: IReponsePersistencia) => {
      this.presistenciaData = presistenciaData;
      this.presistenciaCoberturaData = presistenciaData?.produtos[0]?.coberturas

    })
  }

  ngOnInit(): void {

  }
  verificaCoberturaSelecionada(idCobertura: string): number{
    return this.listCoberturasIds.indexOf(idCobertura);
  }
  getValuesCardsSelected(idCobertura: string) {
    return this.listCoberturasSelected[this.verificaCoberturaSelecionada(idCobertura)]
  }
  getValuesTodosCards(idCobertura: string) {
    return this.listTodasCoberturas.find((cobertura: any)=> cobertura.id_cobertura == idCobertura);
  }
  removeAddCobertura(cobertura: any) {
    const id_cobertura = cobertura.id_cobertura
    const coberturaData = this.getValuesTodosCards(id_cobertura)
    const index = this.listCoberturasIds.indexOf(id_cobertura);
    const importanciaSegurada = cobertura.importancia_segurada;
    const coberturasSend = {
      id_cobertura: id_cobertura,
      importancia_segurada: importanciaSegurada.minimo,
      nome: coberturaData.nome,
      descricao: coberturaData.descricao,
      resumo: coberturaData.resumo}
    if (index == -1) {
      this.functionsService.pushSimuladorSend('coberturasSend',coberturasSend);
      this.functionsService.changeSimuladorPushCobertura('coberturasIds',id_cobertura);
    } else {
      if (index != 0) {
        this.functionsService.removeSimuladorSend('coberturasIds','coberturasSend',coberturasSend);
        this.functionsService.changeSimuladorRemoveCobertura('coberturasIds',id_cobertura);
      }



    }
  }
}
