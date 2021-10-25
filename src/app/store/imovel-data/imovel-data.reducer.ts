import { INITIAL_STATE_RESIDENCIAL, IResidencialData } from './imovel-data.model';
import { Action, createReducer, on,  } from '@ngrx/store';
import { changeResidencialValue, changeAllResencialData } from './imovel-data.actions';


export const residencialDataReducer = createReducer(
  INITIAL_STATE_RESIDENCIAL,
  on(changeResidencialValue, (state,{field, value}) => ({...state, [field]: value})),
  on(changeAllResencialData, (state,{residencialData}) => ({...residencialData})),
);
export function reducer(state: IResidencialData, action: Action) {
  return residencialDataReducer(state, action);
}
