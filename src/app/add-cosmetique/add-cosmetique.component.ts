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
    
    ngOnInit(): void {this.Classifications= this.articleService.listeclassifications();}

    addArticle(){
     
      console.log(this.newIdClas);
      this.newClassification=this.articleService.consulterclassification(this.newIdClas);
      this.newArticle.Classification = this.newClassification;
      this.articleService.ajouterArticleCosmetique(this.newArticle);
      this.router.navigate(['cosmetiques']);
    }
}
