import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/models/departement.mode';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  departement  : Departement[]=[]
  dep:any={}
  singleDep:any
  showFor=false;
  constructor(private service:DepartementService) { }

  ngOnInit(): void {
    this.show()
  }
  show(){
    this.service.getDepartement().subscribe(
      data=>this.departement=data
    )
  }
  ajouterdep(){
    this.service.addDepartement(this.dep).subscribe(
      data =>{
       this.show()
      }
    )
  }
  delete(i:any){
    this.departement.splice(i,1)

  }

  deletedep(id:any,i:any){
    if (confirm("do you really want to delete this item ?"))
    {
this.service.deleteDepartement(id).subscribe(),
this.delete(i)
    
    }
  }


showFormUpdate(p:any){

  this.singleDep=p
  this.showFor=true;
}

}
