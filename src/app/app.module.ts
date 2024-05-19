import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivresComponent } from './livres/livres.component'; // Renamed component
import { AddLivreComponent } from './add-livre/add-livre.component'; // Renamed component
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component'; // Renamed component
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParAuteurComponent } from './recherche-par-auteur/recherche-par-auteur.component'; // Renamed component
import { SearchFilterPipe } from './search-filter.pipe';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LivresComponent, 
    AddLivreComponent,
    UpdateLivreComponent, 
    LoginComponent,
    ForbiddenComponent,
    RechercheParAuteurComponent, 
    SearchFilterPipe,
    RechercheParNomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
