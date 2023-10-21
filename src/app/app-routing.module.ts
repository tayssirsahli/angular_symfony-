import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CosmetiquesComponent  } from './cosmetiques/cosmetiques.component';
import { AddCosmetiqueComponent } from './add-cosmetique/add-cosmetique.component';
import { UpdateArticleCosmetiqueComponent } from './update-article-cosmetique/update-article-cosmetique.component';




const routes: Routes = [
  {path: "cosmetiques", component : CosmetiquesComponent },
  {path: "add-cosmetique", component : AddCosmetiqueComponent },
  {path: "update-article-cosmetique/:id", component: UpdateArticleCosmetiqueComponent},
  { path: "", redirectTo: "cosmetiques", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
