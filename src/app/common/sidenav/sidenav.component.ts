import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'

import { animateToggleSidenavBtn, fadeInOut, navItems, rotate } from './sidenav.constants'

import SidenavService from '../sidenav.service'


@Component({
  imports: [
    RouterModule
  ],
  animations: [,
    animateToggleSidenavBtn,
    fadeInOut,
    rotate,
  ],
  standalone: true,
  selector: 'aside[sidenav]',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export default class SidenavComponent {

  private sidenavService = inject(SidenavService)

  collapsed = this.sidenavService.collapsed
  state = this.sidenavService.state

  items = navItems

}
