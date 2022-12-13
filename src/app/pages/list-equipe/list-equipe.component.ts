import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { detailequipe } from '../../models/detailequipe';
import { DetailEquipeServiceService } from '../../services/detail-equipe-service.service';
import { ToastrService } from 'ngx-toastr';
import { Equipe } from 'src/app/models/equipe';
import { EquipeService } from 'src/app/services/equipe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {
listDetailEquipe: detailequipe[]=[];
detailE = <detailequipe>{};
id:number;
page:Number=1;
totalRecords:any;
searchString:string;
equipeList:Equipe[]=[];
  constructor(private des:DetailEquipeServiceService,
    ac: ActivatedRoute,
    private router: Router,
    private toastr:ToastrService , private ES: EquipeService) { this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.des.retrieveAllDetailEquipes().subscribe((res)=>{this.listDetailEquipe=res;
      this.totalRecords = this.listDetailEquipe.length
      console.log(this.listDetailEquipe);});
      this.ES.getEquipes().subscribe((res)=>{
        this.equipeList=res;
      })
     }


searchText ='';
showToastr(){
  this.toastr.success("Validé");
}
alerttoastr(){
  this.toastr.warning('supprimé !')
}
  addDe(){
    this.des.addDetailEquipe(this.detailE).subscribe(()=>{
      this.des.retrieveAllDetailEquipes().subscribe((res)=>{this.listDetailEquipe=res;});
    });
    console.log(this.detailE);
  }
  deleteDe(id: number) {
    this.des
      .removeDetailEquipe(id)
      .subscribe(() =>
        this.des.retrieveAllDetailEquipes().subscribe((res) => (this.listDetailEquipe = res))
      );
  }
  ngOnInit(): void {
    this.des.retrieveAllDetailEquipes().subscribe((res)=>{this.listDetailEquipe=res;
      this.totalRecords = this.listDetailEquipe.length
      console.log(this.listDetailEquipe);});
      this.ES.getEquipes().subscribe((res)=>{
        this.equipeList=res;
      })


  }

}
