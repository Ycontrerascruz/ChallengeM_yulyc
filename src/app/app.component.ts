import {Component, OnInit} from '@angular/core';
import{ApicharactersService} from './characters/character/apicharacters.service';
import{Observable, observable} from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  constructor(private charactersvc:ApicharactersService){}
  allcharacters:Observable<any>;

  title = 'pmarvelyc';
 public  show:boolean=false;
 public page:number;

 ngOnInit(){
   this.getcharacters();
  console.log('1.init');
}
  toogle(){
    
    this.show =!this.show;
    console.log('2.hola')
   
  }

  paginador=1;
  i=0;
  getcharacters(){
    this.allcharacters=this.charactersvc.getallcharacters();
  
  }
}
