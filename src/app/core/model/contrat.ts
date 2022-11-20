import { Specialite } from "./Specialite";

export class Contrat{
    idContrat:number;
    dateDebutContrat:Date;
    dateFinContrat:Date;
    specialite:Specialite;
    archive:boolean;
    montantContrat:number;
}