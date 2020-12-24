import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from 'src/app/app.component'

const routes: Routes = [
  {
    path:'',redirectTo:'/characters', pathMatch:'full'
  },
  {
    path:'characters', component :AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
