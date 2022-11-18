import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './equipe.component';
import { HttpClientModule } from '@angular/common/http';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { DetailEquipeComponent } from './detail-equipe/detail-equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { EquipeRowComponent } from './equipe-row/equipe-row.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EquipeComponent,
    ListEquipeComponent,
    DetailEquipeComponent,
    FormEquipeComponent,
    EquipeRowComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class EquipeModule { }
