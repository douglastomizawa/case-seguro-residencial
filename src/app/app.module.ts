import { rootReducer } from './store/root.reducer';
import { FormsModule } from '@angular/forms';
import { SimulacaoRoutingModule } from './components/simulacao/simulacao-routing.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { NgxMaskModule } from 'ngx-mask';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';


export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {

    return reducer(state, action);
  };
}
registerLocaleData(localePt)
export const metaReducers: MetaReducer<any, any> [] = [debug];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxMaskModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimulacaoRoutingModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    MatSelectModule,
    CurrencyMaskModule,
    HttpClientModule,
    CurrencyMaskModule,
    FormsModule,
    StoreModule.forRoot(rootReducer, {metaReducers}),
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  exports:[],
  providers: [
    {
      provide: LOCALE_ID, useValue: "pt"
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
