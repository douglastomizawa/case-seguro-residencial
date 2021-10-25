import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
  path: '',
  redirectTo: '/simulacao/dados',
  pathMatch: 'full'
  },
  {
    path: 'simulacao',
    redirectTo: '/simulacao/dados',
    pathMatch: 'full'
  },
  {
    path: 'simulacao',
    loadChildren: () => import('src/app/components/simulacao/simulacao.module').then(m => m.SimulacaoModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
