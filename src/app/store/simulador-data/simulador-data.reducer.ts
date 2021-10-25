import { Action, createReducer, on,  } from '@ngrx/store';
import { changeSimuladorValue, pushArraySimulador, pushSend, removeArraySimulador, removeSend } from './simulador-data.actions';
import { INITIAL_STATE_QUESTIONS_RESPONSE, ISimuladorResponseData, ISimulacaoData } from './simulador-data.model';


export const questionDataReducer = createReducer(
  INITIAL_STATE_QUESTIONS_RESPONSE,
  on(changeSimuladorValue, (state, {field, value}) => ({
    ...state,
    [field]: value
    })),

  on(pushArraySimulador, (state, {field, value})=>({
    ...state,
    [field]: addArray(state,field, value)
  })),
  on(removeArraySimulador, (state, {field, value})=>({
    ...state,
    [field]: removeCoberturaArray(state,field,value)
  })),
  on(pushSend, (state, { field, value})=>({
    ...state,
    [field]: pushArraySend(state, field,value)
  })),
  on(removeSend, (state, {fieldIds, field, value})=>({
    ...state,
    [field]: removeArraySend(state,fieldIds, field,value)
  }))
);
function addArray(state: ISimuladorResponseData | any,field: string, value: string) {
  const idsState:any[] = [];
  let ids: any[] = [];
  if (state[field]) {
    ids = idsState.concat(state[field], idsState);
  }
  ids.push(value);
  return ids
}
function removeCoberturaArray(state: ISimuladorResponseData | any, field: string, value: string) {
  const ids: any[] = [...state[field]];
  const index = ids.indexOf(value);
  if (index != -1) {
    ids.splice(index, 1);
  }
  return ids
}

function returnID(state: ISimuladorResponseData | any,  field: string, value: any) {
  const ids: any[] = [...state[field]];
  const index = ids.indexOf(value.id_questao || value.id_cobertura);

  return index
}

function pushArraySend(state: ISimuladorResponseData | any, field: string, value: string) {
  const idsState:any[] = [];
  let sends: any[] = [];
  if (state[field]) sends = idsState.concat(state[field], idsState);
  sends.push(value);
  return sends
}

function removeArraySend(state: ISimuladorResponseData | any, fieldIds: string, field: string, value: string) {
  const index: any = returnID(state, fieldIds, value,);
  const sends: any[] = [...state[field]];
  if (index != -1) {
    sends.splice(index, 1);

    if (field != 'coberturasSend') sends.push(value);
  }
  return sends
}
export function reducer(state: ISimuladorResponseData, action: Action) {
  return questionDataReducer(state, action);
}
