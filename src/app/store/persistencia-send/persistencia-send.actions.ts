import { createAction, props } from '@ngrx/store';
import { IPersistenciaSend } from './persistencia-send.model';

export const setValues = createAction(
  '[Change value] Change value',
  props<{ propsPersistencia: IPersistenciaSend}>()
);
