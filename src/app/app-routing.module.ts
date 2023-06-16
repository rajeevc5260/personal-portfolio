import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignComponent } from './Components/design/design.component';
import { DevelopmentComponent } from './Components/development/development.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'design', component:DesignComponent},
  {path:'development', component:DevelopmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
