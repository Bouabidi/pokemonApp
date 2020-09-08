import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/shared/pokemonservice.service';
import { IPokemon } from 'src/app/shared/pokemon';
import { SnackBarService } from 'src/app/shared/snack-bar.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  private pokemonn: IPokemon = { position: 0, image: '', name: '' };


  pokemon: any = '';
  pokemonImg = '';
  pokemonType = [];
  mypokemon = [];

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,
    private snackBService: SnackBarService) {

    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }

  ngOnInit(): void {
  }

  getPokemon(id) {
    this.pokemonService.getPokemons(id).subscribe(
      res => {
        console.log(res);
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonn.image = res.sprites.front_default;
        this.pokemonn.position = res.id;
        this.pokemonn.name = res.name;
        this.pokemonType = res.types[0].type.name;
      },
      err => {
        console.log(err);
      }
    )
  }

  add() {
    this.pokemonService.addPokemon(this.pokemon);
    this.snackBService.openSnackBar(this.pokemon.name, 'added');
    this.router.navigateByUrl(`/mypokemons`);
  }

}
