import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contrat } from '../model/contrat';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  public contrats : Contrat[];
  public url = environment.url+"ControleurContrat/";

  constructor(private http:HttpClient) { }

  getAllContrats(){
    return this.http.get<Contrat[]>(this.url+"displayContrats");
  }

  getContratById(idContrat:number){
    return this.http.get<Contrat>(this.url+"displayContrat/"+idContrat);
  }

  addContrat(c:Contrat){
    return this.http.post<Contrat>(this.url+"addContrat",c);

  }

  updateContrat(c:Contrat){
    return this.http.put<Contrat>(this.url+"updateContrat",c);
    
  }

  deleteContrat(c:Contrat){
    return this.http.delete<Contrat>(this.url+"deleteContrat/"+c.idContrat);

  }



}


