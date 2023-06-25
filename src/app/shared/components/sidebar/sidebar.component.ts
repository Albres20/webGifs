import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.services';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  get tags(){
    return this.gifsService.tagsHistory;
  }

  presionar(items:string){
    this.gifsService.searchTag(items);
    console.log(items);
  }
}
