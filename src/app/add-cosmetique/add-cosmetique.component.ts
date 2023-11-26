import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { Classification } from "../model/classification.model";



@Component({
  selector: 'app-add-cosmetique',
  templateUrl: './add-cosmetique.component.html',
  styles: [
  ]
})
export class AddCosmetiqueComponent implements OnInit{

  newArticle = new article();
  Classifications! : Classification[];
  newIdClas! : number;
  newClassification! : Classification;
  

  constructor(
    private router :Router,
    private articleService: ArticleService) { }
    
    ngOnInit(): void {
      this.articleService.listeclassifications().
      subscribe(clas => {this.Classifications = clas;
      console.log(clas);
      });
      }
      

  addArticle() {
    this.newArticle.classification = this.Classifications.find(cat => cat.idClas == this.newIdClas)!;
    this.articleService.ajouterArticleCosmetique(this.newArticle).subscribe(arts => {
      console.log(arts);
      this.router.navigate(['cosmetiques']);
    });
  }
        
    
      
   
}
