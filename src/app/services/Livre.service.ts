import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from '../model/Livre.model';
import { AuthService } from './auth.service';
import { Auteur } from '../model/auteur.model'; // Changed import

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LivreService { // Changed service name

  apiURL: string = 'http://localhost:9095/livres/api'; // Changed API URL
  apiURL_auteur: string = 'http://localhost:9095/livres/api/auteurs'; // Changed API URL for authors

  livres !: Livre[]; // Changed type
  auteurs!: Auteur[]; // Changed type

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  listeLivres(): Observable<Livre[]> { // Changed method name and return type
    return this.http.get<Livre[]>(this.apiURL + "/all");
  }

  ajouterLivre(livre: Livre): Observable<Livre> { // Changed method name and parameter type
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt });
    return this.http.post<Livre>(this.apiURL + "/addlivre", livre, { headers: httpHeaders });
  }

  supprimerLivre(id: number) { // Changed method name
    const url = `${this.apiURL}/dellivre/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt });
    return this.http.delete(url, { headers: httpHeaders });
  }

  consulterLivre(id: number): Observable<Livre> { // Changed method name and return type
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt });
    return this.http.get<Livre>(url, { headers: httpHeaders });
  }

  trierLivres() { // Changed method name
    this.livres = this.livres.sort((n1, n2) => {
      if (n1 && n2 && n1.idLivre && n2.idLivre) {
        if (n1.idLivre > n2.idLivre) {
          return 1;
        }
        if (n1.idLivre < n2.idLivre) {
          return -1;
        }
        return 0;
      }
      return 0;
    });

  }
  updateLivre(livre: Livre): Observable<Livre> { // Changed method name and parameter type
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt });
    return this.http.put<Livre>(this.apiURL + "/updatelivre", livre, { headers: httpHeaders });
  }

  listerAuteurs(): Observable<Auteur[]> { // Changed method name and return type
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt });
    return this.http.get<Auteur[]>(this.apiURL_auteur, { headers: httpHeaders });
  }

  rechercheParAuteur(idAuteur: number): Observable<Livre[]> { // Changed method name and parameter type
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt });
    const url = `${this.apiURL}/livreAuteur/${idAuteur}`;
    return this.http.get<Livre[]>(url, { headers: httpHeaders });
  }

  consulterAuteur(id: number): Auteur { // Changed method name and return type
    const auteurTrouve = this.auteurs.find(auteur => auteur.idAuteur == id);
    if (auteurTrouve) {
      return auteurTrouve;
    } else {
      throw new Error(`Auteur non trouvé pour l'ID : ${id}`);
    }
  }

  rechercherParNom(nom: string): Observable<Livre[]> { // Changed method name
    const url = `${this.apiURL}/livreByName/${nom}`;
    return this.http.get<Livre[]>(url);
  }

  ajouterAuteur(auteur: Auteur): Observable<Auteur> { // Changed method name and parameter type
    return this.http.post<Auteur>(this.apiURL_auteur, auteur, httpOptions);
  }
}
