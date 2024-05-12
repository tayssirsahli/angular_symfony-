import { Component, OnInit } from '@angular/core';
import { Cosmetique } from '../model/Cosmetique.model'; // Changed import
import { ActivatedRoute, Router } from '@angular/router';
import { CosmetiqueService } from '../services/Cosmetique.service'; // Changed import
import { Classification } from "../model/classification.model";

@Component({
  selector: 'app-update-cosmetique', // Changed selector
  templateUrl: './update-cosmetique.component.html' // Changed templateUrl
})
export class UpdateCosmetiqueComponent implements OnInit { 

  currentCosmetique = new Cosmetique(); 
  classifications!: Classification[]; 
  updatedClasId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cosmetiqueService: CosmetiqueService 
  ) { }

  ngOnInit(): void {
    this.cosmetiqueService.listerClassifications().subscribe(cats => {
      this.classifications = cats;
      console.log(cats);
    });
    this.cosmetiqueService.consulterCosmetique(this.activatedRoute.snapshot.params['id']).subscribe(cosmetique => {
      this.currentCosmetique = cosmetique;
      this.updatedClasId = this.currentCosmetique.classification.idClas;
    });
  }

  updateCosmetique() { 
    this.currentCosmetique.classification = this.classifications.find(clas => clas.idClas == this.updatedClasId)!;
    this.cosmetiqueService.updateCosmetique(this.currentCosmetique).subscribe(prod => {
      this.router.navigate(['cosmetiques']);
    });
  }
}
