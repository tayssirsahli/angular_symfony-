import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/Livre.model';
import { LivreService } from '../services/Livre.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html'
})
export class LivresComponent implements OnInit {

  livres!: Livre[];

  constructor(
    private livreService: LivreService,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.chargerLivres();
  }

  chargerLivres() {
    this.livreService.listeLivres().subscribe(livres => {
      console.log(livres);
      this.livres = livres;
    }); 
  }

  supprimerLivre(livre: Livre) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.livreService.supprimerLivre(livre.idLivre).subscribe(() => {
        console.log("Livre supprimé");
        this.chargerLivres();
      });
    }
  }
}
