import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/core/model/contrat';
import { ContratService } from 'src/app/core/services/contrat.service';
import{Location} from '@angular/common';

@Component({
  selector: 'app-form-contrat',
  templateUrl: './form-contrat.component.html',
  styleUrls: ['./form-contrat.component.scss']
})
export class FormContratComponent implements OnInit {
  public contrat : Contrat;
  public action:string ="";
  constructor(private contratService: ContratService,private route:Router,private location:Location,private activatedRoute:ActivatedRoute) {
    this.contrat = new Contrat();
   }

  ngOnInit(): void {
    let idContrat = this.activatedRoute.snapshot.params['idContrat'];
    if(idContrat != null){
      this.action="Modifier";
      this.contratService.getContratById(idContrat).subscribe(
        (object:Contrat)=> this.contrat=object
      )
    }else{
      this.action="Ajouter"
    }
  }


  saveContrat(){
    if(this.action="Ajouter"){
      this.contratService.addContrat(this.contrat).subscribe(
        ()=>{this.route.navigate(['/contrats'])}
      )
    }else{
      this.contratService.updateContrat(this.contrat).subscribe(
        ()=> this.location.back()
      )
    }
  }
}
