import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CosmetiquesComponent  } from './cosmetiques/cosmetiques.component';
import { AddCosmetiqueComponent } from './add-cosmetique/add-cosmetique.component';
import { UpdateArticleCosmetiqueComponent } from './update-article-cosmetique/update-article-cosmetique.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CosmetiqueGuard } from './cosmetique.guard';




const routes: Routes = [
  {path: "cosmetiques", component : CosmetiquesComponent },
  {path: "add-cosmetique", component : AddCosmetiqueComponent, canActivate:[CosmetiqueGuard] },
  {path: "update-article-cosmetique/:id", component: UpdateArticleCosmetiqueComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  { path: "", redirectTo: "cosmetiques", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
