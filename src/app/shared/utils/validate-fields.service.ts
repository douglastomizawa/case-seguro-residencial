import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.model';
@Injectable({
  providedIn: 'root'
})
export class ValidateFieldsService {

  constructor(
    protected state: State<IAppState>,
    protected store: Store<IAppState>,
  ){

  }
  validateFieldObjectEmpty(fieldList: any) {
    let fieldEmpty = true;
    for (var property in fieldList){
      if (fieldList[property] == null || fieldList[property] == "") {
        fieldEmpty = false;
      }
    }
   return fieldEmpty
  }

  validateFieldEmpty(field: string, value: any) {
    let fieldEmpty = true;
    if (field == null || value == "") {
      fieldEmpty = false;
    }
    return fieldEmpty
  }
}
