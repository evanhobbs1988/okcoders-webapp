import { Component } from '@angular/core';

export class Comic {
  id: number;
  name: string;
  pub: string;
}

const COMICS: Comic [] = [
  { id: 11, name: 'Spookhouse', pub: 'ABRAMS COMICARTS' },
  { id: 12, name: 'Death In Oaxaca', pub: 'ABRAMS COMICARTS' },
  { id: 13, name: 'Snoopy To The Rescue', pub: 'ABRAMS COMICARTS' },
  { id: 14, name: 'Airship Enterprise', pub: 'ABRAMS COMICARTS' },
  { id: 15, name: 'Blade Bunny Volume 2', pub: 'ABRAMS COMICARTS' },
  { id: 16, name: '	Cadmus', pub: 'ABRAMS COMICARTS' },
  { id: 17, name: 'Dynama', pub: 'ABRAMS COMICARTS' },
  { id: 18, name: 'Dr IQ', pub: 'ABRAMS COMICARTS' },
  { id: 19, name: 'Magma', pub: 'ABRAMS COMICARTS' },
  { id: 20, name: 'Tornado', pub: 'ABRAMS COMICARTS' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Check out our comics!</h2>
    <ul class="comics">
      <li *ngFor="let comic of comics"
        [class.selected]="comic === selectedHero"
        (click)="onSelect(comic)">
        <span class="badge">{{comic.id}}</span> {{comic.name}}
      </li>
    </ul>
    <div *ngIf="selectedComic">
      <h2>{{selectedComic.name}} details!</h2>
      <div><label>publisher: </label>{{selectedComic.pub}}</div>
      <div>
      </div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .comics {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .comics li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .comics li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .comics li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .comics .text {
      position: relative;
      top: -3px;
    }
    .comics .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Comic Pop';
  comics = COMICS;
  selectedComic: Comic;

  onSelect(comic: Comic): void {
    this.selectedComic = comic;
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/