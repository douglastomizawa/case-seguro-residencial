import { IPersistenciaSend, INITAL_STATE_PERSISTENCIA } from '../../store/persistencia-send/persistencia-send.model';
import { Injectable } from '@angular/core';
import { State, Store, props } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.model';
import { changeAllResencialData, changeResidencialValue } from 'src/app/store/imovel-data/imovel-data.actions';
import { IResidencialData } from 'src/app/store/imovel-data/imovel-data.model';
import { changeValidatorslValue } from 'src/app/store/input-validators/input-validators.actions';
import { changeSimuladorValue, pushArraySimulador, pushSend, removeArraySimulador, removeSend } from 'src/app/store/simulador-data/simulador-data.actions';
import { changePessoalData, changePessoalValue } from 'src/app/store/user-data/user-data.actions';
import { IPessoalData } from 'src/app/store/user-data/user-data.model';
import { setValues } from 'src/app/store/persistencia-send/persistencia-send.actions';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(
    protected store: Store,
    protected state:State<IAppState>,
  ) { }

  changePessoalValueRedux(field: string, value: any) {
    this.store.dispatch(changePessoalValue({field, value}));
  }
  changelPessoalDataRedux(props: IPessoalData) {
    this.store.dispatch(changePessoalData({pessoalData: props}));
  }

  changeResidencialValueRedux(field: string, value: any) {
    this.store.dispatch(changeResidencialValue({field, value}));
  }
  changelResidencialDataRedux(props: IResidencialData) {
    this.store.dispatch(changeAllResencialData({residencialData: props}));
  }
  changeValidatorValueRedux(field: string, value: any) {
    this.store.dispatch(changeValidatorslValue({field, value}));
  }
  changeSimuladorValuesRedux(field: string, value: any) {
    this.store.dispatch(changeSimuladorValue({field, value}));
  }

  changeSimuladorPushCobertura(field: string, value: any) {
    this.store.dispatch(pushArraySimulador({field, value}));
  }
  changeSimuladorRemoveCobertura(field: string, value: any) {
    this.store.dispatch(removeArraySimulador({field,value}));
  }
  pushSimuladorSend(field: string, value: any) {
    this.store.dispatch(pushSend({field, value}));
  }
  removeSimuladorSend(fieldIds: string, field: string, value: any) {
    this.store.dispatch(removeSend({fieldIds ,field, value}));
  }
  setPropsPersistencia() {
    const data = this.state.getValue();

    let propsPersistencia: IPersistenciaSend = INITAL_STATE_PERSISTENCIA;
    propsPersistencia = {
      ...propsPersistencia,
      item_risco: {
        imovel: {
          endereco: data.residencialData,
        }
      },
      oferta: {
        ...propsPersistencia.oferta,
        produtos: [{
          ...propsPersistencia.oferta.produtos[0],
          coberturas: data.simuladorData.coberturasSend
        }
        ]
      },
      proponente: {
        contatos: [
          {
            valor: data.pessoalData.email ,
            tipo: "email"
          },
          {
            valor:  data.pessoalData.phone,
            tipo: "telefone" }],
        cpf: data.pessoalData.cpf,
        data_nascimento: data.pessoalData.birthDate,
        nome: data.pessoalData.nome,
      },
      questoes: [
        data.simuladorData.questions
      ]
    }
    this.store.dispatch(setValues({propsPersistencia}));
    return propsPersistencia;
  }
}
