import { INITIAL_STATE_PERSISTENCIA_DATA } from './persistencia/persistencia.model';
import { INITIAL_STATE_VALIDATORS_DATA } from './input-validators/input-validators.model';
import { INITIAL_STATE_RESIDENCIAL } from './imovel-data/imovel-data.model';
import { INITIAL_STATE_PESSOAL_DATA } from './user-data/user-data.model';
import { IAppState } from "./app.model";
import {  INITIAL_STATE_QUESTIONS_RESPONSE } from './simulador-data/simulador-data.model';
import { INITAL_STATE_PERSISTENCIA } from './persistencia-send/persistencia-send.model';

export const INITIAL_STATE: IAppState = {
  pessoalData: INITIAL_STATE_PESSOAL_DATA,
  residencialData: INITIAL_STATE_RESIDENCIAL,
  validatorsData: INITIAL_STATE_VALIDATORS_DATA,
  simuladorData: INITIAL_STATE_QUESTIONS_RESPONSE,
  presistenciaSend: INITAL_STATE_PERSISTENCIA,
  presistenciaData: INITIAL_STATE_PERSISTENCIA_DATA,
}
