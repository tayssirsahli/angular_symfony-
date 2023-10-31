import { Component,OnInit } from '@angular/core';
import { article } from '../model/article.model';
import { ActivatedRoute,Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Classification } from "../model/classification.model";

@Component({
  selector: 'app-update-article-cosmetique',
  templateUrl: './update-article-cosmetique.component.html'
})
export class UpdateArticleCosmetiqueComponent implements OnInit{

  currentArticle = new article();
  Classifications! : Classification[];
  updatedClasId! : number;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router :Router,
    private articleService: ArticleService) { }
    
    ngOnInit() {
      // console.log(this.route.snapshot.params.id);
      this.Classifications= this.articleService.listeclassifications();
      this.currentArticle = this.articleService.consulterArticle(this.activatedRoute.snapshot. params['id']);
      this.updatedClasId=this.currentArticle.Classification.idClas;
      }
      updateArticle_cosmetique()
      {
        this.currentArticle.Classification =this.articleService.consulterclassification(this.updatedClasId);
        this.articleService.updateArticle_cosmetique(this.currentArticle);
        this.router.navigate(['cosmetiques']);
      } 
    
      
    }
    
