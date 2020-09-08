import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPokemon } from './pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  readonly baseUrl: string = environment.baseUrl;
  readonly imageURL: string = 'https://pokeres.bastionbot.org/images/pokemon/';
  private pokemons: IPokemon[] = [];

  constructor(private http: HttpClient) { }

  addPokemon(pokemon: IPokemon) {
    this.pokemons.push(pokemon);
  }

  deletePokemon(pokemon: IPokemon) {
    /* const index: number = this.pokemons.indexOf(pokemon);
    this.pokemons.splice(index, 1); */
    this.pokemons = this.pokemons.filter(item => item !== pokemon);
  }

  getMyPokemons(): IPokemon[] {
    return this.pokemons;
  }


  getPokemons(index) {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }

  findPokemon(search) {
    return this.http.get(`${this.baseUrl}/pokemon/${search}`).pipe(
      switchMap((pokemon: any) => {
        return forkJoin({
          types: forkJoin(this.generateRequestsForTypes(pokemon.types))
        });
      }, (pokemon, result) => {
        pokemon.types = result.types;
        return pokemon;
      }),
    );
  }

  private generateRequestsForTypes(types: any[]) {
    return types.map((type) => this.getPokemonTypeByUrl(type.type.url));
  }

  private getPokemonTypeByUrl(url: string) {
    return this.http.get(url);
  }

  getPokeImage(index) {
    return `${this.imageURL}${index}.png`;
  }
}
