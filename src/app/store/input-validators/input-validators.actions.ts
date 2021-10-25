import { createAction, props } from '@ngrx/store';

export const changeValidatorslValue = createAction(
  '[Change validator value] Change validator value',
  props<{field: string, value: any}>()
);
