import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contrat } from 'src/app/core/model/contrat';
import { Specialite } from 'src/app/core/model/Specialite';
import { ContratService } from 'src/app/core/services/contrat.service';

@Component({
  selector: 'app-list-contrats',
  templateUrl: './list-contrats.component.html',
  styleUrls: ['./list-contrats.component.scss']
})
export class ListContratsComponent implements OnInit {
  public all : Contrat[] = [];
  public list : Contrat[] = [];
  public specialite:Specialite;
  public filterText:string ="";
  constructor(private serviceContrat: ContratService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.serviceContrat.getAllContrats().subscribe(
      (response)=>{
        this.all = response;
        this.activatedRoute.params.subscribe(
          (params)=>{this.specialite = params['specialite'];
          if(this.specialite != null){
            this.list = this.all.filter((contrat)=>contrat.specialite == this.specialite);
          }else{
            this.list = this.all;
          }
        }
        )
      }
    )
  }
deleteContrat(c:Contrat){
  let i = this.list.indexOf(c);
    this.serviceContrat.deleteContrat(c).subscribe(
      ()=>{
        this.list.splice(i,1);
      }
    )
}
}
