import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/Livre.model'; // Changement d'importation
import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from '../services/Livre.service'; // Changement d'importation
import { Auteur } from "../model/auteur.model";

@Component({
  selector: 'app-update-livre', // Changement de sélecteur
  templateUrl: './update-livre.component.html' // Changement de templateUrl
})
export class UpdateLivreComponent implements OnInit { 

  currentLivre = new Livre(); 
  auteurs!: Auteur[]; 
  updatedAuteurId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private livreService: LivreService // Changement de service
  ) { }

  ngOnInit(): void {
    this.livreService.listerAuteurs().subscribe(auteurs => {
      this.auteurs = auteurs;
      console.log(auteurs);
    });
    this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']).subscribe(livre => {
      this.currentLivre = livre;
      this.updatedAuteurId = this.currentLivre.auteur.idAuteur;
    });
  }

  updateLivre() { 
    this.currentLivre.auteur = this.auteurs.find(auteur => auteur.idAuteur == this.updatedAuteurId)!;
    this.livreService.updateLivre(this.currentLivre).subscribe(livre => {
      this.router.navigate(['livres']);
    });
  }
}
