import { createAction, props } from '@ngrx/store';
import { IReponsePersistencia } from './persistencia.model';

export const setPersistenciaData = createAction(
  '[Change value persistencia] Change value persistencia',
  props<{ propsPersistenciaData: IReponsePersistencia}>()
);
