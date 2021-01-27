import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from 'src/app/app.component';
import {ModalComponent}from './modal/modal.component'

const routes: Routes = [
  {
    path:'',redirectTo:'/characters', pathMatch:'full',
    
  },
  {
    path:'characters', component :AppComponent
  },
  {
    path:'modal', component :ModalComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
