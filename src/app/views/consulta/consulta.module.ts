import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ConsultaComponent } from './consulta.component';
import { ConsultaRoutingModule } from './consulta-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ConsultaRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ConsultaComponent ]
})
export class ConsultaModule { }
