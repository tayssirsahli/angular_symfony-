import { Injectable } from '@angular/core';
import { article } from '../model/article.model';
import { Classification } from "../model/classification.model";


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  cosmetiques : article[]; 
  classifications : Classification[];

  constructor() {
  
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
  ];
  }
  listeArticleCosmetique():article[] {
    return this.cosmetiques;
  }
  ajouterArticleCosmetique( article_COS: article){
    this.cosmetiques.push(article_COS);
  }
  supprimerArticle_cosmetique( A : article){
    
    const index = this.cosmetiques.indexOf(A, 0);
    if (index > -1) {
    this.cosmetiques.splice(index, 1);
    }
   
    }
    article! : article;
    consulterArticle(id:number): article{
      this.article = this.cosmetiques.find(A=> A.idarticle == id)!;
      return this.article;
      }
      
      trierArticle_cosmetique() {
        this.cosmetiques= this.cosmetiques.sort((n1, n2) => {
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
      updateArticle_cosmetique(A : article)
      {
        // console.log(A);
        this.supprimerArticle_cosmetique(A);
        this.ajouterArticleCosmetique(A);
        this.trierArticle_cosmetique();
       
      }
      listeclassifications():Classification[] {
        return this.classifications;
        }
      consulterclassification(id:number): Classification{ 
          return this.classifications.find(clas => clas.idClas == id)!;
          }
          
          
        
}

  

