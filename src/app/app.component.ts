import {Component, OnInit ,ViewChild} from '@angular/core';
import{ApicharactersService} from './characters/character/apicharacters.service';
import{ApicomicsService} from './characters/comic/apicomics.service';
import{Observable, observable,Subject,merge} from 'rxjs';
import{MatDialog} from '@angular/material/dialog';
import {NgbModal,ModalDismissReasons,NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  const buscador=[] ;
  
 
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})





export class AppComponent  implements OnInit{
  
  closeResult = '';
  constructor(private charactersvc:ApicharactersService, private modalService: NgbModal, private comicsvc: ApicomicsService){}
 
  allcharacters:Observable<any>;
  allcomics:Observable<any>;

  title = 'pmarvelyc';
 public  show:boolean=false;
 public page:number;

 ngOnInit(){
  this.getComicInfo();
   this.getcharacters();
  
   
  
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

  getComicInfo(){
    this.allcomics=this.comicsvc.getallcomics();
  
  }




  model: any;

  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? states
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }
  open(content) {
    this.modalService.open(content,{size:'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

 
 

}