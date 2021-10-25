import { INITAL_STATE_PERSISTENCIA, IPersistenciaSend } from './persistencia-send.model';
import { Action, createReducer, on,  } from '@ngrx/store';
import { setValues } from './persistencia-send.actions';


export const persistenciasReducer = createReducer(
  INITAL_STATE_PERSISTENCIA,
  on(setValues, (state,{propsPersistencia}) => ({
    item_risco: propsPersistencia.item_risco,
    oferta: propsPersistencia.oferta,
    proponente: propsPersistencia.proponente,
    questoes: propsPersistencia.questoes

  }))
);
export function reducer(state: IPersistenciaSend, action: Action) {
  return persistenciasReducer(state, action);
}
