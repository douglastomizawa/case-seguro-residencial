import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadoComponent } from './resultado.component';
import {MatSliderModule} from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ResultadoComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSliderModule,
    CurrencyMaskModule,
    FormsModule,
  ],
  exports:[
    ResultadoComponent,
  ]
})
export class ResultadoModule { }
