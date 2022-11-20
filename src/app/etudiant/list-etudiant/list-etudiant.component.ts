import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equip } from 'src/app/core/model/equipe';
import { Etudiant } from 'src/app/core/model/etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.scss']
})
export class ListEtudiantComponent implements OnInit {
  public list : Etudiant[]=[];
  public all :Etudiant[]=[];
  public option:string;
  public filterText :string ="";
  constructor(private serviceEtudiant:EtudiantService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.serviceEtudiant.getAllEtudiants().subscribe(
      (reponse)=>{
        this.all = reponse;
        this.route.params.subscribe(
          (params)=>{this.option = params['option'];
          if(this.option != null){
            this.list = this.all.filter((etudiant)=>etudiant.opt == this.option);
          }else{
            this.list = this.all;
          }
        }
        )
      }
      
    )
  }
  deleteEtudiant(e:Etudiant){
    let i = this.list.indexOf(e);
    this.serviceEtudiant.deleteEtudiant(e).subscribe(
      ()=>{
        this.list.splice(i,1);
      }
    )
  }
}
