import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from '../model/Livre.model';
import { LivreService } from '../services/Livre.service';
import { Auteur } from "../model/auteur.model";

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styles: []
})
export class AddLivreComponent implements OnInit {

  livre = new Livre();
  Auteurs!: Auteur[];
  newIdAuteur!: number;
  newAuteur!: Auteur;

  constructor(
    private router: Router,
    private livreService: LivreService
  ) {}

  ngOnInit(): void {
    this.livreService.listerAuteurs().subscribe(auteurs => {
      this.Auteurs = auteurs;
      console.log(auteurs);
    });
  }

  addLivre() {
    this.livre.auteur = this.Auteurs.find(auteur => auteur.idAuteur == this.newIdAuteur)!;
    this.livreService.ajouterLivre(this.livre).subscribe(livre => {
      console.log(livre);
      this.router.navigate(['livres']);
    });
  }
}
