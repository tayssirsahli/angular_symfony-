import { Injectable } from '@angular/core';
import { article } from '../model/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  cosmetiques : article[]; 
  constructor() {
  this.cosmetiques  = [
    { idarticle: 1, nomarticle: "SUN SECURE Blur SPF50", prixarticle: 69, dateCreation: new Date("2011-01-14")},
    { idarticle: 2, nomarticle: "SVR sebiaclear gel moussant 200 ml", prixarticle: 30, dateCreation: new Date("2020-12-17")},
    { idarticle: 3, nomarticle: "SVR hydraliane crème hydratante riche 40 Ml", prixarticle: 46, dateCreation: new Date("2020-02-20")}
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
      this.updateArticle_cosmetique(A);
      }
}

  

