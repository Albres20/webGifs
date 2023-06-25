import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../pages/home-page-components/home-page.component';
import { SearchBoxComponent } from '../components/search-box/search-box.component';
import { CardListComponent } from '../components/card-list/card-list.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gif.interfaces';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent    
  ]
})
@Injectable({providedIn:'root'})
export class GifsService {
  public gifList: Gif[]=[];/*  contiene la lista de nuestros gifs  */
  private _tagsHistory:string[]=[];
  private apiKey: string= "h4Lgye6e3OQpKYCI4lwRmnAen4ClkHki";
  private serviceUrl:string="https://api.giphy.com/v1/gifs";

  constructor(private http:HttpClient){

  }

  get tagsHistory(){
    return this._tagsHistory;
  }

  private organizeHistory(tag:string){
    tag=tag.toLocaleLowerCase();
    if(this._tagsHistory.includes(tag)){
      console.log("lo contiene")
       this._tagsHistory=this._tagsHistory.filter((oldTag)=> oldTag!==tag) /* si se repite lo borra el anterior y agrega uno nuevo */
    }
   
    this._tagsHistory.unshift(tag); /* Insertar al inicio */
    this._tagsHistory=this.tagsHistory.splice(0,10); /* Slice: recorta desde 0 hasta 10 elementos */
  } 
 
  searchTag(tag:string):void{
    if (tag.length===0) return;
    
    const params= new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', 10)
    .set('q', tag)
    this.organizeHistory(tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe(resp=>{
      console.log(resp.data);
      this.gifList=resp.data;     
    })
/*     fetch("api.giphy.com/v1/gifs/search?api_key=h4Lgye6e3OQpKYCI4lwRmnAen4ClkHki&q=valorant&limit=10").then(resp=>resp.json);
 */    console.log(this.tagsHistory);
  }
 }
