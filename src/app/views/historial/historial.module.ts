import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { HistorialComponent} from './historial.component';
import { HistorialRoutingModule } from './historial-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    HistorialRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ HistorialComponent ]
})
export class HistorialModule { }
