import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailEquipe } from 'src/app/core/model/detailEquipe';
import { Equip } from 'src/app/core/model/equipe';
import { EquipeService } from 'src/app/core/services/equipe.service';


@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.scss']
})
export class FormEquipeComponent implements OnInit {
  public equip : Equip;

  constructor(private equipService:EquipeService,private router : Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.equip = new Equip();
    this.equip.detailEquipe = new DetailEquipe();
  }
  addEquip() {
    console.log(this.equip);
    this.equipService.addEquip(this.equip).subscribe(
      ()=>{this.router.navigate(['/equipes'])}
    );
    }
}
