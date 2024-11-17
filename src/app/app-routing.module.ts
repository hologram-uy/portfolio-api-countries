import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactComponent } from './shared/pages/contact/contact.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

// esta es la definición de cada una de nuestras rutas
const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomePageComponent
  // },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
    // La primera parte del import, es el "path" como string donde se encuentra el módulo que quiero cargar (estática)
    // luego viene el then con la función lamda módulo => quiero que cargues el CountriesModule
  },
  {
    path: '**', // cualquier ruta que no sean las de arriba, va a redireccionar al home
    redirectTo: 'countries' 
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
