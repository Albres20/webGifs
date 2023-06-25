import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.services';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-home-page-components',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.components.css']
})
export class HomePageComponent implements OnInit {

  constructor(private gifsServices:GifsService) { }

  get gifs(): Gif[]{
    return this.gifsServices.gifList;
  }
  ngOnInit(): void {
  }

}
