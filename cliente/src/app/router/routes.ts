import { Routes } from '@angular/router';

import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { LoginComponent } from '../pages/auth/login/login.component';

export const getRoutes = () => {

  const routes: Routes = [
    /* Prevenir loop infinito { path: '', redirectTo: '/home', pathMatch: 'full' }, */
    { path: 'auth/login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
  ];

  return routes;
}