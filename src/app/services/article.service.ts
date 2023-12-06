import { AuthService } from './auth.service';
import { Classification } from './../model/classification.model';
import { RechercheParClasstficationComponent } from './../recherche-par-classtfication/recherche-par-classtfication.component';
import { Injectable } from '@angular/core';
import { article } from '../model/article.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiURL: string = 'http://localhost:8090/cosmetiques/api';
  apiURL_class: string = 'http://localhost:8090/cosmetiques/api/clas';

  cosmetiques !: article[]; 
  classifications! : Classification[];
 

  constructor(private http : HttpClient,
              private authService : AuthService) {
  /*
    this.classifications = [ {idClas : 1,nomClas : "Maquillage"},
                            {idClas : 2, nomClas : "Soins de la peau"},
                            {idClas : 3, nomClas : "Soins capillaires"},
                            {idClas : 4, nomClas : "Parfums"},
                            {idClas : 5, nomClas : "article d'hygiène personnelle"},
                            {idClas : 6, nomClas : "Soins des ongles"}]; 


  this.cosmetiques  = [
    { idarticle: 1, nomarticle: "SUN SECURE Blur SPF50", prixarticle: 69, dateCreation: new Date("2011-01-14") , Classification : {idClas : 2, nomClas : "Soins de la peau"}},
    { idarticle: 2, nomarticle: "SVR sebiaclear gel moussant 200 ml", prixarticle: 30, dateCreation: new Date("2020-12-17"), Classification : {idClas : 2, nomClas : "Soins de la peau"}},
    { idarticle: 3, nomarticle: "Kit Lissage Protein&Collagen 115 ml", prixarticle: 109, dateCreation: new Date("2021-06-29"), Classification : {idClas : 2, nomClas : "Soins capillaires"}},
    { idarticle: 4, nomarticle: "SVR hydraliane crème hydratante riche 40 Ml", prixarticle: 46, dateCreation: new Date("2020-02-20"), Classification : {idClas : 2, nomClas : "Soins de la peau"}}
  ]; */
  }

  listeArticleCosmetique(): Observable<article[]> {
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.get<article[]>(this.apiURL+"/all",{headers:httpHeaders});
  }
  ajouterArticleCosmetique( article_COS: article):Observable<article>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<article>(this.apiURL+"/addcos", article_COS, {headers:httpHeaders});
      
  }
      
  supprimerArticle_cosmetique(id: number) {
    const url = `${this.apiURL}/delcos/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url, {headers:httpHeaders});
  }
  
  article!: article;

  consulterArticle(id: number): Observable<article> {
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<article>(url, { headers: httpHeaders });
  }
  

  trierArticle_cosmetique() {
    this.cosmetiques = this.cosmetiques.sort((n1, n2) => {
      if (n1 && n2 && n1.idarticle && n2.idarticle) {
        if (n1.idarticle > n2.idarticle) {
          return 1;
        }
        if (n1.idarticle < n2.idarticle) {
          return -1;
        }
        return 0;
      }
      return 0;
    });

  }
  updateArticle_cosmetique(arts: article): Observable<article> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.put<article>(this.apiURL + "/updatecos", arts, { headers: httpHeaders });
  }
 
  listeclassifications():Observable<Classification[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+ jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Classification[]>(this.apiURL_class,{headers:httpHeaders});
    }
   
  rechercheParClasstfication(idClas: number): Observable<article[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+ jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    const url = `${this.apiURL}/cosmetiqueClas/${idClas}`;
    return this.http.get<article[]>(url,{headers:httpHeaders});
  }
  
  consulterClassification(id: number): Classification {
    const classificationTrouvee = this.classifications.find(clas => clas.idClas == id);
    if (classificationTrouvee) {
      return classificationTrouvee;
    } else {
      throw new Error(`Classification non trouvée pour l'ID : ${id}`);
    }
  }
  
  rechercherParNom(nom: string):Observable< article[]> {
    
    const url = `${this.apiURL}/cosmetiqueByName/${nom}`;
    return this.http.get<article[]>(url);
    }
    ajouterClassification( clas: Classification):Observable<Classification>{
      return this.http.post<Classification>(this.apiURL_class, clas, httpOptions);
      }
    
    
  }
  
  
  
  
         

  

