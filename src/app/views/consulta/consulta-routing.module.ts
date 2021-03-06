import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaComponent } from './consulta.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultaComponent,
    data: {
      title: 'Consulta'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule {}
