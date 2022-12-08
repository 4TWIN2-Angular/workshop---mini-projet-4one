import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { detailequipe } from '../../models/detailequipe';
import { DetailEquipeServiceService } from '../../services/detail-equipe-service.service';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private des:DetailEquipeServiceService,
    private toastr:ToastrService ) { }


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


  }

}
