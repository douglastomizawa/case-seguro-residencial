import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { SimulacaoComponent } from './simulacao.component';
import { SimulacaoRoutingModule } from './simulacao-routing.module';
import {MatStepperModule} from '@angular/material/stepper';
import { SteperModule } from '../steper/steper.module';
import { MatIconModule } from '@angular/material/icon';
import { InfosSeguroHomeComponent } from '../infos-home-insurance/infos-seguro-home.component';


@NgModule({
  declarations: [
    SimulacaoComponent,
    InfosSeguroHomeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SimulacaoRoutingModule,
    MatStepperModule,
    MatIconModule,
    SteperModule,
  ],
})
export class SimulacaoModule { }
