import { Routes } from '@angular/router'

import SidenavService from '../common/sidenav.service'

import HomeComponent from './home.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    providers: [SidenavService],
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () => import('../core/dashboard.component'),
      },
      {
        path: 'products',
        title: 'Productos',
        loadComponent: () => import('../core/products.component'),
      },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: '**', redirectTo: '' }
    ]
  }
]
