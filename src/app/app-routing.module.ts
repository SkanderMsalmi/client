import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  { path: 'etudiants', loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) },
 { path: 'equipes', loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipeModule) },
  { path: 'contrats', loadChildren: () => import('./contrat/contrat.module').then(m => m.ContratModule) },
   { path: 'universites', loadChildren: () => import('./universite/universite.module').then(m => m.UniversiteModule) },
 { path: 'departements', loadChildren: () => import('./departement/departement.module').then(m => m.DepartementModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
