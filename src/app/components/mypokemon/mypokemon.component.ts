import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/shared/pokemonservice.service';
import { SnackBarService } from 'src/app/shared/snack-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypokemon',
  templateUrl: './mypokemon.component.html',
  styleUrls: ['./mypokemon.component.css']
})
export class MypokemonComponent implements OnInit {

  MydataSource = [];
  pokemon;

  // pokemons: any = (data as any).default;

  constructor(
    private router: Router,
    private pokemonService: PokemonService,
    private snackBService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.printPokemons();
    /* console.log(data); */
  }

  printPokemons() {
    this.MydataSource = this.pokemonService.getMyPokemons();
  }

  getPokemon(id) {
    this.pokemonService.getPokemons(id).subscribe(
      res => {
        console.log(res);
        this.pokemon = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  delete(pokemonn) {
    pokemonn = this.pokemon;
    this.pokemonService.deletePokemon(pokemonn);
    this.snackBService.openSnackBar('pokemon', 'deleted');
    // this.router.navigateByUrl(`/mypokemons`);
  }

}
