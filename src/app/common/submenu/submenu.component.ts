import { Component, Input, booleanAttribute, inject } from '@angular/core'
import { RouterModule } from '@angular/router'

import { NavItem, fadeInOut, toggleSubmenu } from '../sidenav/sidenav.constants'

import SidenavService from '../sidenav.service'


@Component({
  imports: [
    RouterModule
  ],
  animations: [
    toggleSubmenu,
    fadeInOut
  ],
  standalone: true,
  selector: 'submenu',
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.css'
})
export default class SubmenuComponent {

  @Input({ required: true, transform: booleanAttribute }) multiple: boolean = false;
  @Input({ required: true, transform: booleanAttribute }) collapsed: boolean = false;
  @Input({ required: true, transform: booleanAttribute }) expanded: boolean = false;
  @Input({ required: true }) sublevel: NavItem = {} as NavItem

  private _sidenavService = inject(SidenavService)

  activeListItem(item: NavItem) {
    return item.expanded && this._sidenavService.isActiveListItem(item.routerLink)
  }

  toggleExpanded(item: NavItem) {
    const { items } = this.sublevel

    if (!this.multiple) {
      if (items && items.length > 0) {
        for (let modelItem of items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false
          }
        }
      }
    }

    item.expanded = !item.expanded
  }

}
