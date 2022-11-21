import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/core/model/contrat';
import { ContratService } from 'src/app/core/services/contrat.service';

@Component({
  selector: 'app-list-contrats',
  templateUrl: './list-contrats.component.html',
  styleUrls: ['./list-contrats.component.scss']
})
export class ListContratsComponent implements OnInit {
  public list : Contrat[];
  constructor(private serviceContrat: ContratService) { }

  ngOnInit(): void {
    this.serviceContrat.getAllContrats().subscribe(
      (response)=>{
        this.list = response;
        console.log(this.list);
        
      }
    )
  }

}
