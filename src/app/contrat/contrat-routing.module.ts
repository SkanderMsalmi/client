import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratComponent } from './contrat.component';
import { FormContratComponent } from './form-contrat/form-contrat.component';
import { ListContratsComponent } from './list-contrats/list-contrats.component';

const routes: Routes = [{ path: '', component: ContratComponent ,children:[
  {path:'',component:ListContratsComponent},
  {path:'new',component:FormContratComponent },
  {path:'editContrat/:idContrat',component:FormContratComponent},
  {path:'specialite/:specialite',component:ListContratsComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
