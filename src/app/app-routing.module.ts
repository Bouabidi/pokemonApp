import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MypokemonComponent } from './components/mypokemon/mypokemon.component';


const routes: Routes = [
  { path: 'pokemondetails/:id', component: PokemonDetailsComponent },
  { path: '', component: PokemonListComponent },
  { path: 'mypokemons', component: MypokemonComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
