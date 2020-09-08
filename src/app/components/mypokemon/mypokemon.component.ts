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

  constructor(
    private router: Router,
    private pokemonService: PokemonService,
    private snackBService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.printPokemons();
  }

  printPokemons() {
    this.MydataSource = this.pokemonService.getMyPokemons();
  }

  delete(pokemonn) {
    this.pokemonService.deletePokemon(pokemonn);
    this.snackBService.openSnackBar('pokemon', 'deleted');
    this.router.navigateByUrl(`/`);
  }

}
