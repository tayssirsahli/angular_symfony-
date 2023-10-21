import { Component,OnInit } from '@angular/core';
import { article } from '../model/article.model';
import { ActivatedRoute ,Router} from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-update-article-cosmetique',
  templateUrl: './update-article-cosmetique.component.html'
})
export class UpdateArticleCosmetiqueComponent {

  currentArticle = new article();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router :Router,
    private articleService: ArticleService) { }
  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
  this.currentArticle = this.articleService.consulterArticle(this.activatedRoute.snapshot. params['id']);
  console.log(this.currentArticle);
  }
  updateArticle_cosmetique()
  { //console.log(this.currentArticle);
    this.articleService.updateArticle_cosmetique(this.currentArticle);
    this.router.navigate(['cosmetiques']);

  }
}
