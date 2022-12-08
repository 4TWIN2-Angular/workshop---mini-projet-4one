import { Departement } from "./departement.mode";

export class Universite {

    idUniv: number;
    nomUniv: string;
    etat:string;
    departements:Departement[]=[]
  
    constructor(nomUniv: string, idUniv: number,etat:string) {
      this.idUniv = idUniv
      this.nomUniv = nomUniv
      this.etat=etat

}
}



