import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'

import { fadeInOut, navItems, rotate } from './sidenav.constants'

import SidenavService from '../sidenav.service'


@Component({
  imports: [
    RouterModule
  ],
  animations: [
    rotate,
    fadeInOut,
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
