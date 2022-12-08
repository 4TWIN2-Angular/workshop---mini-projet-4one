import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/app/models/universite.mode';
import { DepartementService } from 'src/app/services/departement.service';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-list',
  templateUrl: './listU.component.html',
  styleUrls: ['./listU.component.css']
})
export class ListUComponent implements OnInit {

  universites:Universite []=[];
 univ:any={}
 singleUniv:any
 show=false;
 dat:any
 dat2:any


  constructor(
    private universiteService : UniversiteService,
   
    private service : DepartementService
  ) { }

  ngOnInit(): void {
this.showUniv()







  }

  showUniv(){
    this.universiteService.getUniversite().subscribe(
      data =>{
        this.universites = data ;
        console.log(data);

      },
      error =>{
        console.log(error) }
    )
  }

  ajouterUniv(){
    console.log(this.univ)
    this.universiteService.addUniversite(this.univ).subscribe(
      data =>{
    
        this.showUniv()




      }
    )
  }
  delete(i:any){
    this.universites.splice(i,1)

  }

  deleteUniv(id:any,i:any){
    if (confirm("do you really want to delete this item ?"))
    {
this.universiteService.deleteUniversite(id).subscribe(),
this.delete(i)
    }
  }


  showFormUpdate(p:any){
    this.singleUniv=p;
    this.show=true;

  }



}


