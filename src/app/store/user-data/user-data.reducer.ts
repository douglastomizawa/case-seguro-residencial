import { Action, createReducer, on,  } from '@ngrx/store';
import { changePessoalData, changePessoalValue } from './user-data.actions';
import { INITIAL_STATE_PESSOAL_DATA, IPessoalData } from './user-data.model';


export const pessoalDataReducer = createReducer(
  INITIAL_STATE_PESSOAL_DATA,
  on(changePessoalValue, (state, {field, value}) => ({
    ...state,
    [field]: value
    })),

);
export function reducer(state: IPessoalData, action: Action) {
  return pessoalDataReducer(state, action);
}
