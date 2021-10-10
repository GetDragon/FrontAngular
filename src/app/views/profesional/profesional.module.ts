import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProfesionalComponent } from './profesional.component';
import { ProfesionalRoutingModule } from './profesional-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ProfesionalRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [ ProfesionalComponent ]
})
export class ProfesionalModule { }
