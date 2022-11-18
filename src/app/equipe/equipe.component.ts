import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equip } from '../core/model/equipe';
import { EquipeService } from '../core/services/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {


  constructor(private equipeService: EquipeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
   
    
  }


}
