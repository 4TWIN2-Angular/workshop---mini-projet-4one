import { Component, Input, OnInit } from '@angular/core';
import { Equipe } from 'src/app/Model/equipe';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-equipe-k',
  templateUrl: './equipe-k.component.html',
  styleUrls: ['./equipe-k.component.css']
})
export class EquipeKComponent implements OnInit {
  @Input() equipe!:Equipe;
  listEquipes!:Equipe[];
listEtudiants!:any;

selectedTeam:any;

nbreByNiveau!:any;
  constructor(private equipeService:EquipeService) { }

  ngOnInit(): void {
  }
  deleteEquipe(id:any)
  {
    this.equipeService.deleteEquipe(id).subscribe();
    location.reload();

  }
  upgradeEquipes()
  {
    this.equipeService.upgradeEquipe().subscribe();
    location.reload();
  }
  getEtudiantsByEquipe(id:any)
  {
this.equipeService.getEtudiantsByEquipe(id).subscribe(res=>this.listEtudiants=res);

  }
countByNiveau(niveau:any)
{
  this.equipeService.countEquipeByNiveau(niveau).subscribe(nbreByNiveau=>this.nbreByNiveau=nbreByNiveau);


}

  


}
