import { Component, OnInit } from '@angular/core';
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
  constructor(private serviceEtudiant:EtudiantService) { }

  ngOnInit(): void {
    this.serviceEtudiant.getAllEtudiants().subscribe(
      (reponse)=>{this.list = reponse}
      
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
