package com.ScuolaWebService2.controller;


import com.ScuolaWebService2.CategoriaUtente;
import com.ScuolaWebService2.entity.Persona;
import com.ScuolaWebService2.entity.Utente;
import com.ScuolaWebService2.librerie.ManageDb;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/scuola")
@SecurityRequirement(name = "wsRestSecurityScheme")
@RestController
public class ScuolaController {
    ManageDb myDb = new ManageDb();



    @RequestMapping(value = "/{tipoScuola}", method = RequestMethod.GET)
    public ArrayList<CategoriaUtente> categorie(@PathVariable("tipoScuola") int tipoScuola) {
        return generaListaCategorie(tipoScuola);
    }



    @PostMapping("/login/2")
    public ArrayList<Persona> allieviDelDocente(@RequestBody Utente utente) {
        ArrayList<Persona> result = new ArrayList<>();
        String queryTrovaUtente = "SELECT * FROM utente WHERE username = ? AND password = ?";
        try (Connection conn = myDb.Connect();
             PreparedStatement pStatement = conn.prepareStatement(queryTrovaUtente)) {
            pStatement.setString(1, utente.getUsername());
            pStatement.setString(2, utente.getPassword());
           try( ResultSet resultSet = pStatement.executeQuery()){
               if (resultSet.next()) {

                   utente.setAbilitato(resultSet.getInt("abilitato"));
                   if (utente.getAbilitato() == 1) {
                       utente.setProfilo(resultSet.getInt("profilo"));
                       if(utente.getProfilo()==2){
                           utente.setCf_docente(resultSet.getString("cf_docente"));
                       }else{
                           System.out.println("utente non è docente");
                           return result;
                       }
                   } else {
                       System.out.println("utente non è abilitato");
                       return result;
                   }
               } else {
                   System.out.println("utente non trovato");
                   return result;
               }
           }


        } catch (SQLException e) {
            e.printStackTrace();
        }
        return generaListaAllievi(utente);
    }

 public ArrayList<Persona> generaListaAllievi(Utente utente) {
        ArrayList<Persona> listaAllievi = new ArrayList<>();
        if (utente.getProfilo() != 2) {
            System.out.println("Utente non è autorizzato per operazione docente");
            return listaAllievi;
        }

        if (utente.getCf_docente() != null) {
            String sqlQuery = "SELECT DISTINCT allievo.nome, allievo.cognome, allievo.cf, allievo.email " +
                    "FROM allievo " +
                    "INNER JOIN allievo_in_classe ON allievo.cf = allievo_in_classe.cf_allievo " +
                    "INNER JOIN docente_classe ON docente_classe.livello_classe = allievo_in_classe.livello_classe " +
                    "AND docente_classe.sezione_classe = allievo_in_classe.sezione_classe " +
                    "WHERE docente_classe.cf_docente = ?";

            try (Connection conn = myDb.Connect();
                 PreparedStatement pStatement = conn.prepareStatement(sqlQuery)) {
                pStatement.setString(1, utente.getCf_docente());
               try(ResultSet resultSet = pStatement.executeQuery()){
                   while (resultSet.next()) {
                       Persona allievo = new Persona();
                       allievo.setNome(resultSet.getString("nome"));
                       allievo.setCognome(resultSet.getString("cognome"));
                       allievo.setCf(resultSet.getString("cf"));
                       allievo.setEmail(resultSet.getString("email"));
                       listaAllievi.add(allievo);
                   }
                }

            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return listaAllievi;
    }


    private ArrayList<CategoriaUtente> generaListaCategorie(int tipoScuola) {
        ArrayList<CategoriaUtente> listCat = new ArrayList<>();
        CategoriaUtente cat1 = new CategoriaUtente(2, "Docenti Scuola Elementare",
                "Sezione dedicata agli insegnanti per la gestione del loro classi",
                "teacher.png", "Accedi");
        CategoriaUtente cat2 = new CategoriaUtente(3, "Alunni Scuola Elementare",
                "Sezione dedicata agli alunni per prenotazione prove e visualizzazione voti",
                "backpack.png", "Accedi");
        CategoriaUtente cat3 = new CategoriaUtente(1, "Amministrativi",
                "Sezione dedicata agli amministrativi per la gestione delle classi",
                "folder.png", "Accedi");
        CategoriaUtente cat4 = new CategoriaUtente(4, "Famiglie",
                "Sezione dedicata alle famiglie",
                "home.png", "Accedi");
        CategoriaUtente cat5 = new CategoriaUtente(2, "Docenti Scuola Media",
                "Sezione dedicata agli insegnanti per la gestione del loro classi",
                "teacher.png", "Accedi");
        CategoriaUtente cat6 = new CategoriaUtente(3, "Alunni Scuola Media",
                "Sezione dedicata agli alunni per prenotazione prove e visualizzazione voti",
                "backpack.png", "Accedi");
        CategoriaUtente cat7 = new CategoriaUtente(2, "Docenti Scuola Superiore",
                "Sezione dedicata agli insegnanti per la gestione del loro classi",
                "teacher.png", "Accedi");
        CategoriaUtente cat8 = new CategoriaUtente(3, "Alunni Scuola Superiore",
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


/*
    @PostMapping("/login/2")
    public HashMap<Persona,String> allieviDelDocente(@RequestBody Utente utente) {
        HashMap<Persona,String> result = new HashMap<>();
        // Utente currUtente = new Utente();

        String queryTrovaUtente = "SELECT * FROM utente WHERE username = ? AND password = ?";
        try (Connection conn = myDb.Connect();
             PreparedStatement pStatement = conn.prepareStatement(queryTrovaUtente)) {
            pStatement.setString(1, utente.getUsername());
            pStatement.setString(2, utente.getPassword());
            ResultSet resultSet = pStatement.executeQuery();

            if (resultSet.next()) {
                //  currUtente.setPassword(password);
                // currUtente.setUsername(username);
                utente.setAbilitato(resultSet.getInt("abilitato"));
                if (utente.getAbilitato() == 1) {
                    utente.setProfilo(resultSet.getInt("profilo"));
                    if(utente.getProfilo()==2){
                        utente.setCf_docente(resultSet.getString("cf_docente"));
                    }else{
                        System.out.println("utente non è docente");
                        return result;
                    }
                } else {
                    System.out.println("utente non è abilitato");
                    return result;
                }
            } else {
                System.out.println("utente non trovato");
                return result;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return generaListaAllievi(utente);
    }
    public HashMap<Persona,String > generaListaAllievi(Utente utente) {
        HashMap<Persona,String> listaAllievi = new HashMap<>();

        if (utente.getProfilo() != 2) {
            System.out.println("Utente non è autorizzato per operazione docente");
            return listaAllievi;
        }

        if (utente.getCf_docente() != null) {
            String sqlQuery = "SELECT DISTINCT allievo.nome, allievo.cognome, allievo.cf, allievo.email,allievo_in_classe.livello_classe,allievo_in_classe.sezione_classe  " +
                    "FROM allievo " +
                    "INNER JOIN allievo_in_classe ON allievo.cf = allievo_in_classe.cf_allievo " +
                    "INNER JOIN docente_classe ON docente_classe.livello_classe = allievo_in_classe.livello_classe " +
                    "AND docente_classe.sezione_classe = allievo_in_classe.sezione_classe " +
                    "WHERE docente_classe.cf_docente = ?";

            try (Connection conn = myDb.Connect();
                 PreparedStatement pStatement = conn.prepareStatement(sqlQuery)) {
                pStatement.setString(1, utente.getCf_docente());
                ResultSet resultSet = pStatement.executeQuery();
                while (resultSet.next()) {
                    String livelloSezione=null;
                    Persona allievo = new Persona();
                    allievo.setNome(resultSet.getString("nome"));
                    allievo.setCognome(resultSet.getString("cognome"));
                    allievo.setCf(resultSet.getString("cf"));
                    allievo.setEmail(resultSet.getString("email"));
                    livelloSezione=resultSet.getString("livello_classe")+resultSet.getString("sezione_classe");
                    listaAllievi.put(allievo,livelloSezione);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return listaAllievi;
    }
*/

}
