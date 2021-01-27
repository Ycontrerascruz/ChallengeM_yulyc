import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{NgxPaginationModule} from 'ngx-pagination';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap'
import{ModalComponent} from './modal/modal.component'

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModule,
   
    
  ],
  
  entryComponents:[

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }