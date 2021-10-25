import { createAction, props } from '@ngrx/store';

export const changeSimuladorValue = createAction(
  '[Change question value] Change question value',
  props<{field: string, value: any}>()
);

export const pushArraySimulador = createAction(
  '[Push simulador value] Push simulador value',
  props<{field: string,value: any}>()
);
export const removeArraySimulador = createAction(
  '[Remove simulador value] Remove simulador value',
  props<{field: string, value: any}>()
);
export const pushSend = createAction(
  '[Push Send value] Push Send value',
  props<{field: string, value: any}>()
);
export const removeSend = createAction(
  '[Remove Send value] Remove Send value',
  props<{fieldIds: string, field: string, value: any}>()
);
export const awayScore = createAction('[Scoreboard Page] Away Score');
export const resetScore = createAction('[Scoreboard Page] Score Reset');
