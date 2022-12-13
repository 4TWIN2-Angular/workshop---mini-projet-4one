import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notyf } from 'notyf';
import { Equipe } from 'src/app/Model/equipe';
import { Niveau } from 'src/app/Model/Niveau';
import { EquipeService } from 'src/app/services/equipe.service';


@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {
listEquipes!:Equipe[];
nomEquipe!:string;
listEtudiants!:any;
notyf = new Notyf();
selectedTeam:any;

nbreByNiveau!:any;
  constructor(private equipeService:EquipeService, private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }
  

  ngOnInit(): void {
    this.equipeService.getEquipes().subscribe(res=>this.listEquipes=res);
    console.log(this.listEquipes);
    


    this.notyf.success({message:'Dont forget to smile 😊😊!',duration:6000,dismissible:true});

    this.notyf.error('Please fill out the form');
  
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

search()
{
  this.listEquipes=this.listEquipes.filter(res=>
    {
      if(this.nomEquipe!="")
      {
        return res.nomEquipe.toLowerCase().match(this.nomEquipe.toLocaleLowerCase());

      }else if(this.nomEquipe=="")
      {
        this.ngOnInit();
      }
    })
}

  
}
