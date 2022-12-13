import { Component, OnInit, Input } from '@angular/core';
import { Equipe } from 'src/app/models/equipe';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-combobox-etud',
  templateUrl: './combobox-etud.component.html',
  styleUrls: ['./combobox-etud.component.css']
})
export class ComboboxEtudComponent implements OnInit {
  @Input() equipeListC:Equipe[]=[];

  constructor() { }

  ngOnInit(): void {

  }

}
