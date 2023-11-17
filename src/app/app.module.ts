import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CosmetiquesComponent } from './cosmetiques/cosmetiques.component';
import {AddCosmetiqueComponent }from './add-cosmetique/add-cosmetique.component';
import { FormsModule } from '@angular/forms';
import { UpdateArticleCosmetiqueComponent } from './update-article-cosmetique/update-article-cosmetique.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';




@NgModule({
  declarations: [
    AppComponent,
    CosmetiquesComponent,
    AddCosmetiqueComponent,
    UpdateArticleCosmetiqueComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
