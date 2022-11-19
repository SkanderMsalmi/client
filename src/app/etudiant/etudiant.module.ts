import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantComponent } from './etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { DetailEtudiantComponent } from './detail-etudiant/detail-etudiant.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EtudiantComponent,
    ListEtudiantComponent,
    DetailEtudiantComponent,
    FormEtudiantComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    FormsModule
  ]
})
export class EtudiantModule { }
