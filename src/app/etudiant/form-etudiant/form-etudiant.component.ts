import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/core/model/etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';
import{Location} from '@angular/common';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.scss']
})
export class FormEtudiantComponent implements OnInit {
  public etudiant : Etudiant=new Etudiant();
  public action:string;
  constructor(private etudiantService:EtudiantService,private location:Location,private router:Router,private activatedRoute:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    let idEtudiant = this.activatedRoute.snapshot.params['idEtudiant'];
    if(idEtudiant!= null){
      this.action = "Modifier";
      this.etudiantService.getEtudiantById(idEtudiant).subscribe(
        (object:Etudiant)=>this.etudiant=object
      )
    }else{
      this.action="Ajouter"
    }
  }

  saveEtudiant(){
    if(this.action="Ajouter"){
      this.etudiantService.addEtudiant(this.etudiant).subscribe(
        ()=>{this.router.navigate(['/etudiants'])}
      )
    }else{
      this.etudiantService.updateEtudiant(this.etudiant).subscribe(
        ()=> this.location.back()
      )
    }
   
  }
}
