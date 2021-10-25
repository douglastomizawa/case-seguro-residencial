import { createAction, props } from '@ngrx/store';
import { IPessoalData } from './user-data.model';

export const changePessoalValue = createAction(
  '[Change value] change Value',
  props<{field: string, value: any}>()
);
export const changePessoalData = createAction(
  '[Change  Pessoal Data] change Pessoal Data',
  props<{pessoalData: IPessoalData}>()
);
