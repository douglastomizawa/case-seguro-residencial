import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteperComponent } from './steper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SobreSeguroModule } from '../steps/sobre-seguro/sobre-seguro.module';
import { ResultadoModule } from '../steps/resultado/resultado.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepsModule } from '../steps/steps.module';


@NgModule({
  declarations: [SteperComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    SobreSeguroModule,
    ResultadoModule,
    FormsModule,
    ReactiveFormsModule,
    StepsModule
  ]
})
export class SteperModule { }
