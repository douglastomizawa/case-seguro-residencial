import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { DadosResidenciaisComponent } from './dados-residenciais/dados-residenciais.component';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { CoberturaSeguroComponent } from './cobertura-seguro/cobertura-seguro.component';



@NgModule({
  declarations: [
    DadosPessoaisComponent,
    DadosResidenciaisComponent,
    CoberturaSeguroComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    CurrencyMaskModule,
    FormsModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    TextMaskModule,
    NgxMaskModule.forRoot(),
    MatDatepickerModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  exports: [
    DadosPessoaisComponent,
    DadosResidenciaisComponent,
    CoberturaSeguroComponent,

  ]
})
export class StepsModule { }
