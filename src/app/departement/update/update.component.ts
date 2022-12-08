import { Component, Input, OnInit } from '@angular/core';
import { Departement } from 'src/app/models/departement.mode';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input()dep:any;
  universite:any[]=[]

  constructor(
    private service : DepartementService,
    
   
  ) { }

  ngOnInit(): void {
 

  }

  updateUniv(univ:Departement){
    this.service.editDepartement(univ,univ.idDepart).subscribe(
      data =>{
      
      }
    )

  }

}
