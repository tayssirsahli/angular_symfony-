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
    

    ngOnInit(): void {
      this.articleService.listeclassifications().
      subscribe(cats => {this.Classifications = cats;
      console.log(cats);
      });
      this.articleService.consulterArticle(this.activatedRoute.snapshot.params['id']).subscribe( arts =>{ this.currentArticle = arts; 
        this.updatedClasId = this.currentArticle.classification.idClas;
      } ) ;
      }

      updateArticle_cosmetique() {
        this.currentArticle.classification = this.Classifications.find(clas => clas.idClas == this.updatedClasId)!;
        this.articleService.updateArticle_cosmetique(this.currentArticle).subscribe(prod => {
          this.router.navigate(['cosmetiques']); }
        );
        }
  
      
    }
    
