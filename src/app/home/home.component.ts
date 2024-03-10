import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { collapseSidenav, expandMain } from '../common/sidenav/sidenav.constants'
import { SidenavComponent } from '../common/sidenav/sidenav.component'

import SidenavService from '../common/sidenav.service'


@Component({
  imports: [
    RouterOutlet,
    SidenavComponent,
  ],
  animations: [
    collapseSidenav,
    expandMain
  ],
  standalone: true,
  selector: 'home',
  template: `
    <aside sidenav [@collapsedNav]="collapsed()"></aside>
    
    <main [@expandedMain]="collapsed()">
      <!-- <button type="button" (click)="toggleSidenav()"> -->
      <button type="button" (click)="collapsed.set(!collapsed())">
        {{collapsed() ? 'Extend': 'Collapse'}}
      </button>
      <router-outlet />
    </main>
    `,
  styleUrl: './home.component.css',
})
export default class HomeComponent {

  private sidenavService = inject(SidenavService)

  collapsed = this.sidenavService.collapsed

}
