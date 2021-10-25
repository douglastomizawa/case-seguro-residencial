import { createAction, props } from '@ngrx/store';
import { IResidencialData } from './imovel-data.model';

export const changeResidencialValue = createAction(
  '[Change value] change Value',
  props<{field: string, value: boolean}>()
);
export const changeAllResencialData = createAction(
  '[Change  Pessoal Data] change Pessoal Data',
  props<{residencialData: IResidencialData}>()
);
