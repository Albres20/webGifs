import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.services';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  constructor(private gifsService:GifsService) { }

  
  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>;

  searchTag(){
    const newTag=this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value="";
    
  }
}
