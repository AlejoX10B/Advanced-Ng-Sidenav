import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'

import { fadeInOut, moveButton, navItems, rotate } from './sidenav.constants'

import SidenavService from '../sidenav.service'


@Component({
  imports: [
    RouterModule
  ],
  animations: [,
    moveButton,
    fadeInOut,
    rotate,
  ],
  standalone: true,
  selector: 'aside[sidenav]',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {

  private sidenavService = inject(SidenavService)

  collapsed = this.sidenavService.collapsed

  items = navItems


}
