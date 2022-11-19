import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../core/services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

  constructor(private serviceEtudiant:EtudiantService) { }

  ngOnInit(): void {
    this.serviceEtudiant.getAllEtudiants().subscribe(
      (etudiant)=>console.log(etudiant)
    )
  }

}
