import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IpsComponent } from './ips.component';

const routes: Routes = [
  {
    path: '',
    component: IpsComponent,
    data: {
      title: 'IPS'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpsRoutingModule {}
