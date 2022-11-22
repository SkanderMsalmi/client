import { Pipe, PipeTransform } from '@angular/core';
import { Contrat } from '../core/model/contrat';

@Pipe({
  name: 'filterContrat'
})
export class FilterContratPipe implements PipeTransform {

  transform(contrats: Contrat[], filterText: string): Contrat[] {
    if(contrats.length === 0  || filterText === ''){
      return contrats;
    }else{
      return contrats.filter((contrat)=>{
        return contrat.specialite.toString().toLowerCase().includes(filterText.toLowerCase());
      })
    }
  }

}
