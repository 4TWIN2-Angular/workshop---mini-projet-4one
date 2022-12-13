import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Equipe } from 'src/app/Model/equipe';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
@Input() nbreByNiveau!:any;
equipe:Equipe;


  constructor(private equipeService:EquipeService) { }

  ngOnInit(): void {
  }
  
}
