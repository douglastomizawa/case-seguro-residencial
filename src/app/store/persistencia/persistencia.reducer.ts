import { IReponsePersistencia, INITIAL_STATE_PERSISTENCIA_DATA } from './persistencia.model';
import { Action, createReducer, on,  } from '@ngrx/store';
import { setPersistenciaData } from './persistencia.actions';


export const persistenciaDataReducer = createReducer(
  INITIAL_STATE_PERSISTENCIA_DATA,
  on(setPersistenciaData, (state,{propsPersistenciaData}) => ({
    id_simulacao:        propsPersistenciaData.id_simulacao,
    id_cotacao_parceiro: propsPersistenciaData.id_cotacao_parceiro,
    corretora:           propsPersistenciaData.corretora,
    produtos:            propsPersistenciaData.produtos,
    opcoes_pagamento:    propsPersistenciaData.opcoes_pagamento,
    metodos_pagamento:   propsPersistenciaData.metodos_pagamento

  }))

);
export function reducer(state: IReponsePersistencia, action: Action) {
  return persistenciaDataReducer(state, action);
}
