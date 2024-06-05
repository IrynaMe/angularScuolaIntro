package com.ScuolaWebService2;


import java.io.Serializable;

public class CategoriaUtente implements Serializable {
    private int id;
    private String nomeCat;
    private String descrCat;
    private String photo;
    private String linkCat;

    public CategoriaUtente(int id, String nomeCat, String descrCat, String photo, String linkCat) {
        this.id = id;
        this.nomeCat = nomeCat;
        this.descrCat = descrCat;
        this.photo = photo;
        this.linkCat = linkCat;
    }

    public int getId() {
        return id;
    }

    public String getNomeCat() {
        return nomeCat;
    }

    public String getDescrCat() {
        return descrCat;
    }

    public String getPhoto() {
        return photo;
    }

    public String getLinkCat() {
        return linkCat;
    }


}
