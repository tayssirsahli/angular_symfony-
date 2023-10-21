import { Component, OnInit } from '@angular/core';
import { article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-add-cosmetique',
  templateUrl: './add-cosmetique.component.html',
})
export class AddCosmetiqueComponent implements OnInit{

  newArticle = new article();
  ngOnInit(): void {}
  constructor(
    private router :Router,
    private articleService: ArticleService
     ) { }
  
     addArticle(){
    //console.log(this.newArticle);
    this.articleService.ajouterArticleCosmetique(this.newArticle);
    this.router.navigate(['cosmetiques']);

    }
}
