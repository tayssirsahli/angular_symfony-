import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { article } from '../model/article.model';
import { ArticleService  } from '../services/article.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-cosmetiques',
  templateUrl: './cosmetiques.component.html'
})
export class CosmetiquesComponent implements OnInit {
  
  cosmetiques !: article[];
  

  constructor(private articleService : ArticleService,
              public authService: AuthService,
              private router:Router) { 
          //this.chargerArticle_cosmetiques();

              }
  ngOnInit(): void {
    this.chargerArticle_cosmetiques();
  }
  

  chargerArticle_cosmetiques(){
    this.articleService.listeArticleCosmetique().subscribe(arts => {
    console.log(arts);
    this.cosmetiques= arts;
    }); 
    }
  supprimerArticle_cosmetique(A: article) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.articleService.supprimerArticle_cosmetique(A.idarticle).subscribe(() => {
        console.log("article cosmetique supprimé");
        this.chargerArticle_cosmetiques();
      });
  }
}
