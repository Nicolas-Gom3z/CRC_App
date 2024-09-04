import { Routes } from '@angular/router';
import { ViewResponseComponent } from './pages/view-response/view-response.component';
import { HomeComponent } from './pages/home/home.component';
import { MakeResponseComponent } from './pages/make-response/make-response.component';

export const routes: Routes = [


  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'view-response',
    component: ViewResponseComponent,
    pathMatch: 'full'
  },
  {
    path: 'make-response',
    component: MakeResponseComponent,
    pathMatch: 'full'
  }

];
