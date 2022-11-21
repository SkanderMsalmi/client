import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { ContratComponent } from './contrat.component';
import { ListContratsComponent } from './list-contrats/list-contrats.component';
import { FormContratComponent } from './form-contrat/form-contrat.component';


@NgModule({
  declarations: [
    ContratComponent,
    ListContratsComponent,
    FormContratComponent
  ],
  imports: [
    CommonModule,
    ContratRoutingModule
  ]
})
export class ContratModule { }
