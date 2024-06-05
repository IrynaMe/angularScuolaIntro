package com.ScuolaWebService2;


import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;

@SecurityRequirement(name = "wsRestSecurityScheme")
@RestController
public class ScuolaController {

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/scuola/{tipoScuola}", method = RequestMethod.GET)
    public ArrayList<CategoriaUtente> categorie(@PathVariable("tipoScuola") int tipoScuola) {
        return generaListaCategorie(tipoScuola);
    }

    private ArrayList<CategoriaUtente> generaListaCategorie(int tipoScuola) {
        ArrayList<CategoriaUtente> listCat = new ArrayList<>();
        CategoriaUtente cat1 = new CategoriaUtente(1, "Docenti Scuola Elementare",
                "Sezione dedicata agli insegnanti per la gestione del loro classi",
                "teacher.png", "Accedi");
        CategoriaUtente cat2 = new CategoriaUtente(2, "Alunni Scuola Elementare",
                "Sezione dedicata agli alunni per prenotazione prove e visualizzazione voti",
                "backpack.png", "Accedi");
        CategoriaUtente cat3 = new CategoriaUtente(3, "Amministrativi",
                "Sezione dedicata agli amministrativi per la gestione delle classi",
                "folder.png", "Accedi");
        CategoriaUtente cat4 = new CategoriaUtente(4, "Famiglie",
                "Sezione dedicata alle famiglie",
                "home.png", "Accedi");
        CategoriaUtente cat5 = new CategoriaUtente(5, "Docenti Scuola Media",
                "Sezione dedicata agli insegnanti per la gestione del loro classi",
                "teacher.png", "Accedi");
        CategoriaUtente cat6 = new CategoriaUtente(6, "Alunni Scuola Media",
                "Sezione dedicata agli alunni per prenotazione prove e visualizzazione voti",
                "backpack.png", "Accedi");
        CategoriaUtente cat7 = new CategoriaUtente(7, "Docenti Scuola Superiore",
                "Sezione dedicata agli insegnanti per la gestione del loro classi",
                "teacher.png", "Accedi");
        CategoriaUtente cat8 = new CategoriaUtente(8, "Alunni Scuola Superiore",
                "Sezione dedicata agli alunni per prenotazione prove e visualizzazione voti",
                "backpack.png", "Accedi");
        switch (tipoScuola) {
            case 0:
                listCat.add(cat1);
                listCat.add(cat2);
                listCat.add(cat3);
                listCat.add(cat4);
                break;
            case 1:
                listCat.add(cat5);
                listCat.add(cat6);
                listCat.add(cat3);
                listCat.add(cat4);
                break;
            case 2:
                listCat.add(cat7);
                listCat.add(cat8);
                listCat.add(cat3);
                listCat.add(cat4);
                break;
            default:
                return null;
        }
        return listCat;
    }


    @RequestMapping(value = "prova/input", method = RequestMethod.POST)
    public boolean provaCreate(String key, String saluto) {
        HashMap saluti = new HashMap();
        saluti.put(key, saluto);
        return true;
    }


}
