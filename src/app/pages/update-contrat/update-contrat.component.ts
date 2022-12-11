import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Contrat } from "src/app/models/contrat";
import { ContratService } from "src/app/services/contrat.service";

@Component({
  selector: "app-update-contrat",
  templateUrl: "./update-contrat.component.html",
  styleUrls: ["./update-contrat.component.css"],
})
export class UpdateContratComponent implements OnInit {
  contrat = <Contrat>{};
  id: number;
  error: any = { isError: false, errorMessage: "" };
  isValidDate: any;

  constructor(
    private cs: ContratService,
    private ac: ActivatedRoute,
    private router: Router
  ) {}

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

  getContratById() {
    this.cs.getContratById(this.id).subscribe((res) => {
      this.contrat = res;
      //console.log(this.contrat);
    });
  }
  updateContrat() {
    this.isValidDate = this.validateDates(
      this.contrat.dateDebutContrat,
      this.contrat.dateFinContrat
    );
    if (this.isValidDate) {
      this.cs.updateContrat(this.contrat, this.id).subscribe(() => {
        this.cs.b = true;
        this.cs.text = "Contrat mis à jour avec succès.";
        this.router.navigate(["contrats"]);
      });
      //console.log(this.error);
      this.error.isError = false;
    }
  }

  ngOnInit(): void {
    this.id = this.ac.snapshot.params["idContrat"];
    this.getContratById();
    //console.log(this.id);
  }
}
