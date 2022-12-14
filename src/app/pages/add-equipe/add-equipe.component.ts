import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipeService } from 'src/app/services/equipe.service';
import { Notyf } from 'notyf';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  equipeData={
    nomEquipe:'',
    niveau:'',
  };
  notyf = new Notyf();
  constructor(private equipeService:EquipeService,private router:Router) { }

  ngOnInit(): void {
  }

  addEquipe()
  {
    this.equipeService.addEquipe(this.equipeData).subscribe(
      ()=>{
        this.router.navigate(["equipes"])
        this.notyf.success({message:'Equipe ajoutée avec success',duration:6000,dismissible:true});

      }
    );

  }

}
