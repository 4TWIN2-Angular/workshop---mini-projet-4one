import { Etudiant } from "./etudiant";

export class Contrat {
  idContrat: number;
  dateDebutContrat: string;
  dateFinContrat: string;
  specialite: string;
  archive: boolean;
  montantContrat: number;
  etudiant: Etudiant;
}
