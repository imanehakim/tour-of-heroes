import { Injectable } from '@angular/core';
import { HEROES } from '../Data/mock-heroes';
import { Hero } from '../models/hero';
import { Observable, of, pipe } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
