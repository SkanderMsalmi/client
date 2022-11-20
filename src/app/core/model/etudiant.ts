import { Contrat } from "./contrat";
import { Departement } from "./departement";

export class Etudiant{
    idEtudiant:number;
    prenomE:string;
    nomE:string;
    opt:string;
    contrat: Contrat[];
    departement:Departement;
}