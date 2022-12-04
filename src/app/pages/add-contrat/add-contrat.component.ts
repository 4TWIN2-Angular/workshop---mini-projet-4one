import { Component, OnInit } from "@angular/core";
import { Contrat } from "src/app/models/contrat";
import { ContratService } from "src/app/services/contrat.service";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-contrat",
  templateUrl: "./add-contrat.component.html",
  styleUrls: ["./add-contrat.component.css"],
})
export class AddContratComponent implements OnInit {
  contrat = <Contrat>{};

  constructor(private cs: ContratService, private router: Router) {}

  addContrat() {
    let formatedDateDebut = new DatePipe("en-US").transform(
      this.contrat.dateDebutContrat,
      "dd-MM-yyyy"
    );
    let formatedDateFin = new DatePipe("en-US").transform(
      this.contrat.dateFinContrat,
      "dd-MM-yyyy"
    );
    const new_contrat = {
      ...this.contrat,
      dateDebutContrat: formatedDateDebut,
      dateFinContrat: formatedDateFin,
    };
    //console.log(new_contrat);
    this.cs.addContrat(new_contrat).subscribe();
    this.cs.b = true;
    //console.log(this.cs.b);
    this.router.navigateByUrl("/contrats");
  }

  ngOnInit(): void {}
}
