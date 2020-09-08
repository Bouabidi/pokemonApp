import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokemonService } from './shared/pokemonservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MypokemonComponent } from './components/mypokemon/mypokemon.component';
import { SnackBarService } from './shared/snack-bar.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    PageNotFoundComponent,
    MypokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [PokemonService, SnackBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
