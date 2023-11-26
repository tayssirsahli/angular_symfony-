import { Classification } from './../model/classification.model';
import { Component, OnInit } from '@angular/core';
import { article } from '../model/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-recherche-par-classtfication',
  templateUrl: './recherche-par-classtfication.component.html',
})
export class RechercheParClasstficationComponent implements OnInit {
  cosmetiques!: article[];
  IdClassification!: number;
  classifications!: Classification[];
  NomClassification!: string ;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.listeclassifications().subscribe(response => {
      this.classifications = response;
      console.log(this.classifications);
    });
  }

  onChange() {
    if (this.IdClassification !== undefined && !isNaN(this.IdClassification)) {
      this.articleService.rechercheParClasstfication(this.IdClassification)
        .subscribe(arts => {
          this.cosmetiques = arts;
        });
    } else {
      console.error('IdClassification is not a valid number. Cannot make the request.');
    }
  }
  
      
}


 

  

