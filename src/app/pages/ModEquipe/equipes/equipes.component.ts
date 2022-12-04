import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/Model/equipe';
import { EquipeService } from 'src/app/services/equipe.service';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {
listEquipes!:Equipe[];
listEtudiants!:any;
  constructor(private equipeService:EquipeService) { }
  

  ngOnInit(): void {
    this.equipeService.getEquipes().subscribe(res=>this.listEquipes=res);
    console.log(this.listEquipes);
  
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
}
