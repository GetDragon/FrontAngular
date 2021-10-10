import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IpsComponent } from './ips.component';
import { IpsRoutingModule } from './ips-routing.module';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    FormsModule,
    IpsRoutingModule,
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [ IpsComponent ]
})
export class IpsModule { }
