import { MatRadioModule } from '@angular/material/radio';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreSeguroComponent } from './sobre-seguro.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [SobreSeguroComponent],
  imports: [
    CommonModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    CurrencyMaskModule,
    FormsModule,
    ],
  exports:[
    SobreSeguroComponent,
  ]
})
export class SobreSeguroModule { }
