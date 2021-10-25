import { INITIAL_STATE_VALIDATORS, INITIAL_STATE_VALIDATORS_DATA, IValidators, IValidatorsData } from './input-validators.model';
import { Action, createReducer, on,  } from '@ngrx/store';
import { changeValidatorslValue } from './input-validators.actions';


export const validatorDataReducer = createReducer(
  INITIAL_STATE_VALIDATORS_DATA,
  on(changeValidatorslValue, (state,{field, value}) => ({
    ...state,
      [field]: value
    })),
);
export function reducer(state: IValidatorsData, action: Action) {
  return validatorDataReducer(state, action);
}
