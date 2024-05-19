import { LivreService } from '../services/Livre.service';
import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/Livre.model';
import { Auteur } from '../model/auteur.model';

@Component({
  selector: 'app-recherche-par-auteur',
  templateUrl: './recherche-par-auteur.component.html',
})
export class RechercheParAuteurComponent implements OnInit {
  livres: Livre[] = [];
  IdAuteur: number | undefined;
  auteurs: Auteur[] = [];
  NomAuteur: string = '';

  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    this.livreService.listerAuteurs().subscribe(response => {
      this.auteurs = response;
    });
  }

  onChange(): void {
    if (this.IdAuteur !== undefined && !isNaN(this.IdAuteur)) {
      this.livreService.rechercheParAuteur(this.IdAuteur)
        .subscribe(livres => {
          this.livres = livres;
        });
    } else {
      console.error('IdAuteur is not a valid number. Cannot make the request.');
    }
  }
}
