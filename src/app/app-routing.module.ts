import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"route1"
  },
  {
    path:"route1",
    component:Route1Component
  },
  {
    path:"route2",
    component:Route2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
