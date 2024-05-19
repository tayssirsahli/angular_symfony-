import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivresComponent  } from './livres/livres.component'; 
import { AddLivreComponent } from './add-livre/add-livre.component'; 
import { UpdateLivreComponent } from './update-livre/update-livre.component'; 
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LivreGuard } from './livre.guard'; 
import {RechercheParAuteurComponent} from './recherche-par-auteur/recherche-par-auteur.component'; 
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  {path: "livres", component : LivresComponent }, 
  {path: "add-livre", component : AddLivreComponent, canActivate:[LivreGuard] }, 
  {path: "update-livre/:id", component: UpdateLivreComponent}, 
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "rechercheParAuteur", component : RechercheParAuteurComponent}, 
  {path: "rechercheParNom", component : RechercheParNomComponent},
  { path: "", redirectTo: "livres", pathMatch: "full" } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
