import { Injectable } from '@angular/core';
import { Allievo } from './allievo';
import { Utente } from './utente';

@Injectable({
  providedIn: 'root',
})
export class GetClasseService {
  url = 'http://localhost:8080/scuola/login/2';
  ElencoStudenti: Allievo[] = [];
  livelloSezione:string="";

  constructor() {
    console.log("Richiamato costruttore servizio");
  }

  async getAllStudenti(docente : Utente) : Promise<Allievo[]> {
    // Esecuzione
    console.log("Richiamato getAllStudenti");
    const data = await fetch(this.url, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      //make sure to serialize your JSON body
      body: JSON.stringify(docente)});

    this.ElencoStudenti = await data.json();
    return this.ElencoStudenti ?? [];
    }

}
