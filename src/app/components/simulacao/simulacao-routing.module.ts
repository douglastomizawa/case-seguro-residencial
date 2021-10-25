import { SimulacaoComponent } from './simulacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SteperComponent } from '../steper/steper.component';

const simulacaoRoutes: Routes = [
 {
   path: '',
   component: SimulacaoComponent,
   children: [
    {
      path: 'dados',
      component: SteperComponent,
    },
   ]
 }

];

@NgModule({
  imports: [RouterModule.forChild(simulacaoRoutes)],
  exports: [RouterModule]
})
export class SimulacaoRoutingModule { }
