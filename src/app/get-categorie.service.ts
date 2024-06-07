import { Injectable } from '@angular/core';
import { CategoriaUtente } from './categoria-utente';

@Injectable({
  providedIn: 'root'
})
export class GetCategorieService {
  url="http://localhost:8080/scuola/";
  elencoCategorie:CategoriaUtente[]=[];

  constructor() { }
  
  getAllCategorieOld():CategoriaUtente[]{
    return this.elencoCategorie;
  }

/*   async getAllCategorie(num:any): Promise<CategoriaUtente[]> { 
    //esecuzione
    const data = await fetch(this.url+num); 
    return await data.json() ?? []; 
    }
     */



    async getAllCategorie(num: number): Promise<CategoriaUtente[]> {
      const data = await fetch(this.url + num);
      const jsonData = await data.json();
      if (jsonData) {
        return jsonData;
      } else {
        return []; 
      }
    }

  

    }

