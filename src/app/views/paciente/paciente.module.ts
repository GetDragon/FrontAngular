import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PacienteComponent } from './paciente.component';
import { PacienteRoutingModule } from './paciente-routing.module';
import { CommonModule } from '@angular/common';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    FormsModule,
    PacienteRoutingModule,
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [ PacienteComponent ]
})
export class PacienteModule { }
