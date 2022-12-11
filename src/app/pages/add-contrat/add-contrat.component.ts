import { Component, OnInit } from "@angular/core";
import { Contrat } from "src/app/models/contrat";
import { ContratService } from "src/app/services/contrat.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-contrat",
  templateUrl: "./add-contrat.component.html",
  styleUrls: ["./add-contrat.component.css"],
})
export class AddContratComponent implements OnInit {
  contrat = <Contrat>{};
  error: any = { isError: false, errorMessage: "" };
  isValidDate: any;

  constructor(private cs: ContratService, private router: Router) {}

  validateDates(sDate: string, eDate: string) {
    this.isValidDate = true;

    if (sDate != null && eDate != null && eDate < sDate) {
      this.error = {
        isError: true,
        errorMessage: "La date de fin doit être supérieure à la date de début.",
      };
      this.isValidDate = false;
    }
    return this.isValidDate;
  }

  addContrat() {
    this.isValidDate = this.validateDates(
      this.contrat.dateDebutContrat,
      this.contrat.dateFinContrat
    );
    //console.log(new_contrat);
    if (this.isValidDate) {
      this.cs.addContrat(this.contrat).subscribe(() => {
        this.cs.b = true;
        this.cs.text = "Contrat ajouté avec succès.";
        //console.log(this.cs.b);
        this.router.navigate(["contrats"]);
      });
      this.error.isError = false;
    }
  }

  ngOnInit(): void {}
}
