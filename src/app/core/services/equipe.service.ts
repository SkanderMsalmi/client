import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Equip } from '../model/equipe';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  public equipe : Equip|any;
 
  public url = environment.url+"ControleurEquipe/";

  constructor(private http:HttpClient) {
    
  }

 getAllEquipes(){
  return this.http.get<Equip[]>(this.url+"displayEquipes");
 }

 addEquip(e:Equip){
  
  return this.http.post(this.url+"addEquipe",e);
 }

}
