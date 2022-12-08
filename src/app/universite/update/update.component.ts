import { Component, Input, OnInit } from '@angular/core';
import { Universite } from 'src/app/models/universite.mode';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input()univ:any;

  constructor(
    private service : UniversiteService,
   
  ) { }

  ngOnInit(): void {
  }

  updateUniv(univ:Universite){
    this.service.editUniversite(univ,univ.idUniv).subscribe(
      data =>{
       
      }
    )

  }

}