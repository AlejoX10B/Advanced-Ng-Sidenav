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
        path: 'document',
        title: 'Document',
        loadComponent: () => import('../core/document.component'),
      },
      {
        path: 'important',
        title: 'Inbox',
        loadComponent: () => import('../core/important.component'),
      },
      {
        path: 'inbox',
        title: 'Inbox',
        loadComponent: () => import('../core/inbox.component'),
      },
      {
        path: 'sent',
        title: 'Sent',
        loadComponent: () => import('../core/sent.component'),
      },
      {
        path: 'settings',
        title: 'Settings',
        loadComponent: () => import('../core/settings.component'),
      },
      {
        path: 'spam',
        title: 'Spam',
        loadComponent: () => import('../core/spam.component'),
      },
      {
        path: 'starred',
        title: 'Starred',
        loadComponent: () => import('../core/starred.component'),
      },
      {
        path: 'trash',
        title: 'Trash',
        loadComponent: () => import('../core/trash.component'),
      },
      { path: '', pathMatch: 'full', redirectTo: 'inbox' },
      { path: '**', redirectTo: '' }
    ]
  }
]
