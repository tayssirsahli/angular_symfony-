import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cosmetique } from '../model/Cosmetique.model'; // Changed import
import { AuthService } from './auth.service';
import { Classification } from '../model/classification.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CosmetiqueService { // Changed service name

  apiURL: string = 'http://localhost:9095/cosmetiques/api';
  apiURL_class: string = 'http://localhost:9095/cosmetiques/api/clas';

  cosmetiques !: Cosmetique[]; // Changed type
  classifications!: Classification[];

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  listeCosmetiques(): Observable<Cosmetique[]> { // Changed method name and return type

    return this.http.get<Cosmetique[]>(this.apiURL + "/all");
  }

  ajouterCosmetique(cosmetique: Cosmetique): Observable<Cosmetique> { // Changed method name and parameter type
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt });
    return this.http.post<Cosmetique>(this.apiURL + "/addcos", cosmetique, { headers: httpHeaders });
  }

  supprimerCosmetique(id: number) { // Changed method name
    const url = `${this.apiURL}/delcos/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt });
    return this.http.delete(url, { headers: httpHeaders });
  }

  consulterCosmetique(id: number): Observable<Cosmetique> { // Changed method name and return type
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt });
    return this.http.get<Cosmetique>(url, { headers: httpHeaders });
  }

  trierCosmetiques() { // Changed method name
    this.cosmetiques = this.cosmetiques.sort((n1, n2) => {
      if (n1 && n2 && n1.idCosmetique && n2.idCosmetique) {
        if (n1.idCosmetique > n2.idCosmetique) {
          return 1;
        }
        if (n1.idCosmetique < n2.idCosmetique) {
          return -1;
        }
        return 0;
      }
      return 0;
    });

  }
  updateCosmetique(cosmetique: Cosmetique): Observable<Cosmetique> { // Changed method name and parameter type
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt });
    return this.http.put<Cosmetique>(this.apiURL + "/updatecos", cosmetique, { headers: httpHeaders });
  }

  listerClassifications(): Observable<Classification[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt });
    return this.http.get<Classification[]>(this.apiURL_class, { headers: httpHeaders });
  }

  rechercheParClassification(idClas: number): Observable<Cosmetique[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt });
    const url = `${this.apiURL}/cosmetiqueClas/${idClas}`;
    return this.http.get<Cosmetique[]>(url, { headers: httpHeaders });
  }

  consulterClassification(id: number): Classification {
    const classificationTrouvee = this.classifications.find(clas => clas.idClas == id);
    if (classificationTrouvee) {
      return classificationTrouvee;
    } else {
      throw new Error(`Classification non trouvée pour l'ID : ${id}`);
    }
  }

  rechercherParNom(nom: string): Observable<Cosmetique[]> { // Changed method name
    const url = `${this.apiURL}/cosmetiqueByName/${nom}`;
    return this.http.get<Cosmetique[]>(url);
  }

  ajouterClassification(clas: Classification): Observable<Classification> {
    return this.http.post<Classification>(this.apiURL_class, clas, httpOptions);
  }
}
