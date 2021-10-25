import { persistenciaDataReducer } from './persistencia/persistencia.reducer';
import { validatorDataReducer } from './input-validators/input-validators.reducer';
import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "./app.model";
import { residencialDataReducer } from "./imovel-data/imovel-data.reducer";
import { pessoalDataReducer } from "./user-data/user-data.reducer";
import { questionDataReducer } from './simulador-data/simulador-data.reducer';
import { persistenciasReducer } from './persistencia-send/persistencia-send.reducer';

export const rootReducer: ActionReducerMap<IAppState> = {
  pessoalData: pessoalDataReducer,
  residencialData: residencialDataReducer,
  validatorsData: validatorDataReducer,
  simuladorData: questionDataReducer,
  presistenciaSend: persistenciasReducer,
  presistenciaData: persistenciaDataReducer,
}
