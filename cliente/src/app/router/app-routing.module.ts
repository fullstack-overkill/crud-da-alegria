import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getRoutes } from './routes';


const routes = getRoutes();

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }