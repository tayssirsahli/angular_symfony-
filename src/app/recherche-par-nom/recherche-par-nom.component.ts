import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/Livre.model';
import { LivreService } from '../services/Livre.service';
import { Auteur } from '../model/auteur.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {
  
  livres!: Livre[];
  nomLivre!: string;
  auteur!: Auteur[];
  searchTerm!: string;
  allLivres!: Livre[];
  
  constructor(private livreService: LivreService) {}
  
  ngOnInit(): void {
    this.livreService.listeLivres().subscribe(livres => { 
      console.log(livres);
      this.livres = livres;
      this.allLivres = livres; // Initialisation de allLivres
    });
  }
  
  rechercherLivre() {
    this.livreService.rechercherParNom(this.nomLivre).subscribe(livres => { 
      this.livres = livres; 
      this.allLivres = livres; // Mise à jour de allLivres avec les résultats de recherche
      console.log(livres);
    });
  }
  
  onKeyUp(filterText: string) {
    this.livres = this.allLivres.filter(item =>
      item.nomLivre.toLowerCase().includes(filterText.toLowerCase()));
  }
}
