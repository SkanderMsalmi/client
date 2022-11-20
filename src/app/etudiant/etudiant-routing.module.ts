import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEtudiantComponent } from './detail-etudiant/detail-etudiant.component';
import { EtudiantComponent } from './etudiant.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';

const routes: Routes = [{ path: '', component: EtudiantComponent ,children:[
  {path:'',component:ListEtudiantComponent},
  {path:'option/:option',component:ListEtudiantComponent},
  {path:'new',component:FormEtudiantComponent},
  {path:'profil/:idEtudiant',component:DetailEtudiantComponent},
  {path:'editEtudiant/:idEtudiant',component:FormEtudiantComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
