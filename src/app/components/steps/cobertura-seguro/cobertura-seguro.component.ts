import { firstCobertura } from './data-fixo';
import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICobertura, ICoberturas } from 'src/app/core/interfaces/cobertura.interface';
import { SimuladorService } from 'src/app/core/services/simulador.service';
import { FunctionsService } from 'src/app/shared/utils/functions.service';
import { IAppState } from 'src/app/store/app.model';

@Component({
  selector: 'app-cobertura-seguro',
  templateUrl: './cobertura-seguro.component.html',
  styleUrls: ['./cobertura-seguro.component.scss']
})
export class CoberturaSeguroComponent implements OnInit {
  coberturas!: ICoberturas[];
  listCoberturasSelected: string[] = [];
  listCoberturasSelected$: Observable<string[]>
  idFixo: string = "13ee29a3-1df3-4466-9e41-43753ec74d82";

  constructor(
    public functionsService: FunctionsService,
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
    private simuladorService: SimuladorService,
  ) {
    this.listCoberturasSelected$ = store.select((state: IAppState) => state.simuladorData.coberturasIds);
    this.listCoberturasSelected$.subscribe((cobertura: string[]) => {
      this.listCoberturasSelected = cobertura;
    })
  }

  ngOnInit(): void {
    this.getCobertura();
    const index = this.listCoberturasSelected.indexOf(this.idFixo);
    if (index == -1) {
      this.functionsService.pushSimuladorSend('coberturasSend',firstCobertura);
      this.functionsService.changeSimuladorPushCobertura('coberturasIds',this.idFixo);
    }

  }
  getCobertura() {
    this.simuladorService.getCobertura().subscribe((cobertura: ICobertura)=> {
      this.coberturas = cobertura.produtos[0].coberturas;
      this.functionsService.changeSimuladorValuesRedux('todasCoberturas', this.coberturas);

    });
  }
  cardSelected(cobertura: ICoberturas) {
    const id_cobertura = cobertura.id_cobertura
    // const data = this.state.getValue().simuladorData.questions.resposta
    const index = this.listCoberturasSelected.indexOf(id_cobertura);
    const importanciaSegurada = cobertura.importancias_segurada[0];
    const coberturasSend = {
      id_cobertura,
      importancia_segurada: importanciaSegurada.minimo,
      nome: cobertura.nome,
      descricao: cobertura.descricao,
      resumo: cobertura.resumo}
    if (index == -1) {
      this.functionsService.pushSimuladorSend('coberturasSend',coberturasSend);
      this.functionsService.changeSimuladorPushCobertura('coberturasIds',id_cobertura);
    } else {
      if (index != 0) {
        this.functionsService.removeSimuladorSend('coberturasIds','coberturasSend',coberturasSend);
        // this.functionsService.changeSimuladorPushCobertura('coberturasIds',id_cobertura);
        this.functionsService.changeSimuladorRemoveCobertura('coberturasIds',id_cobertura);
      }


    }
  }
  getIndexOf(cobertura: ICoberturas) {
    const index = this.listCoberturasSelected?.indexOf(cobertura.id_cobertura);
    return index > -1
  }
}
