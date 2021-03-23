import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HEROES } from 'src/app/Data/mock-heroes';
import { HeroService } from 'src/app/services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];





  constructor(
    private heroService: HeroService
    ) { }

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(): void {
  //  this.heroes = this.heroService.getHeroes();

  this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);

  }
}
