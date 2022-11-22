import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { ContratComponent } from './contrat.component';
import { ListContratsComponent } from './list-contrats/list-contrats.component';
import { FormContratComponent } from './form-contrat/form-contrat.component';
import { FormsModule } from '@angular/forms';
import { FilterContratPipe } from '../pipes/filter-contrat.pipe';


@NgModule({
  declarations: [
    ContratComponent,
    ListContratsComponent,
    FormContratComponent,
    FilterContratPipe

  ],
  imports: [
    CommonModule,
    ContratRoutingModule,
    FormsModule,
  ]
})
export class ContratModule { }
