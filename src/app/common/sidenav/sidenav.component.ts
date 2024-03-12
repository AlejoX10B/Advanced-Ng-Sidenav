import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'

import { NavItem, animateToggleSidenavBtn, fadeInOut, navItems, rotate } from './sidenav.constants'

import SubmenuComponent from '../submenu/submenu.component'
import SidenavService from '../sidenav.service'


@Component({
  imports: [
    RouterModule,
    SubmenuComponent
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

  private _sidenavService = inject(SidenavService)

  collapsed = this._sidenavService.collapsed
  state = this._sidenavService.state

  multiple = true
  items = navItems

  activeListItem(item: NavItem) {
    return this._sidenavService.isActiveListItem(item.routerLink)
  }

  toggleExpanded(item: NavItem) {
    const items = this.items.main

    if (!this.multiple) {
      for (let model of items) {
        if (item !== model && model.expanded) {
          model.expanded = false
        }
      }
    }

    item.expanded = !item.expanded
  }

}
