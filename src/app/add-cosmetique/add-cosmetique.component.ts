import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cosmetique } from '../model/Cosmetique.model';
import { CosmetiqueService } from '../services/Cosmetique.service';
import { Classification } from "../model/classification.model";

@Component({
  selector: 'app-add-cosmetique',
  templateUrl: './add-cosmetique.component.html',
  styles: []
})
export class AddCosmetiqueComponent implements OnInit {

  newCosmetique = new Cosmetique();
  Classifications!: Classification[];
  newIdClas!: number;
  newClassification!: Classification;

  constructor(
    private router: Router,
    private cosmetiqueService: CosmetiqueService
  ) {}

  ngOnInit(): void {
    this.cosmetiqueService.listerClassifications().subscribe(clas => {
      this.Classifications = clas;
      console.log(clas);
    });
  }

  addCosmetique() {
    this.newCosmetique.classification = this.Classifications.find(clas => clas.idClas == this.newIdClas)!;
    this.cosmetiqueService.ajouterCosmetique(this.newCosmetique).subscribe(cosm => {
      console.log(cosm);
      this.router.navigate(['cosmetiques']);
    });
  }
}
