import { Component, OnInit } from '@angular/core';
import { article } from '../model/article.model';
import { ArticleService  } from '../services/article.service';
@Component({
  selector: 'app-cosmetiques',
  templateUrl: './cosmetiques.component.html'
})
export class CosmetiquesComponent implements OnInit {

  cosmetiques : article[];

  constructor(private ArticleService: ArticleService  ) {
  this.cosmetiques = ArticleService.listeArticleCosmetique();
  
  }
  supprimerArticle_cosmetique(A :article)
  {
    //console.log(A);
    
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.ArticleService.supprimerArticle_cosmetique(A);


  }
  ngOnInit(): void {
    
  }
 
}
