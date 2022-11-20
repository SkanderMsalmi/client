import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/core/model/etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import {Location} from '@angular/common';
import { Departement } from 'src/app/core/model/departement';
@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.scss']
})
export class DetailEtudiantComponent implements OnInit {
  public etudiant : Etudiant = new Etudiant();
  public isEditing : boolean;
  public view : string;
  constructor(private route:ActivatedRoute,private router : Router , private location: Location,private serviceEtudiant: EtudiantService) {
    this.etudiant.departement = new Departement();
    this.view = "cards";
   }

  ngOnInit(): void {
    let idEtudiant = this.route.snapshot.params['idEtudiant'];
    this.serviceEtudiant.getEtudiantById(idEtudiant).subscribe(
      (reponse)=>{this.etudiant=reponse;}
    )
  }
  edit(){
    this.isEditing = !this.isEditing;
  }

  updateDepartementFromEtudiant(){

  }

  deleteEtudiant(etudiant:Etudiant){
    this.serviceEtudiant.deleteEtudiant(etudiant).subscribe(
      () => this.router.navigate(['/etudiants'])
    );
    
}
}
