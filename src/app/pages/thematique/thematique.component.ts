import { Component, OnInit } from '@angular/core';
import { DetailEquipeServiceService } from 'src/app/services/detail-equipe-service.service';

@Component({
  selector: 'app-thematique',
  templateUrl: './thematique.component.html',
  styleUrls: ['./thematique.component.css']
})
export class ThematiqueComponent implements OnInit {
nbrL:number;
nbrH:number;
nbrS:number;
nbrM:number;
  constructor(private des:DetailEquipeServiceService) { }

  ngOnInit(): void {
    this.allL();
    this.allH();
    this.allM();
    this.allS();
  }

  allL(){
    this.des.retrieveLangue().subscribe((res)=>{this.nbrL=res})
  }
  allH(){
    this.des.retrieveHistoire().subscribe((res)=>{this.nbrH=res})
  }
  allS(){
    this.des.retrieveScience().subscribe((res)=>{this.nbrS=res})
  }
  allM(){
    this.des.retrieveScience().subscribe((res)=>{this.nbrM=res})
  }
}
