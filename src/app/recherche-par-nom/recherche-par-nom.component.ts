import { Component, OnInit } from '@angular/core';
import { article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { Classification } from '../model/classification.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {
  
  
  cosmetiques!: article[];
  nomarticle !: string;
  classifications !: Classification[] ;
  searchTerm!:string;
  AllCosmetique! : article[];
  constructor(private articleService: ArticleService) {}
  ngOnInit(): void {
    this.articleService.listeArticleCosmetique().subscribe(arts => {
      console.log(arts);
      this.cosmetiques = arts;
      });
  }
  rechercherArticle(){
    this.articleService.rechercherParNom(this.nomarticle).subscribe(arts => {
      this.cosmetiques = arts; 
      console.log(arts)});
    }
  onKeyUp(filterText: string) {
    this.cosmetiques = this.AllCosmetique.filter(item =>
      item.nomarticle.toLowerCase().includes(filterText));
  }

    
    
}
