import { Injectable, computed, inject, signal } from '@angular/core'
import { Router } from '@angular/router'
import { NavItem } from './sidenav/sidenav.constants'

@Injectable()
export default class SidenavService {

  private _router = inject(Router)

  hidden = signal<boolean>(false)
  collapsed = signal<boolean>(false)

  state = computed<string>(() => {
    const hidden = this.hidden()
    const collapsed = this.collapsed()

    if (hidden && collapsed) {
      return 'all'
    }
    else if (hidden && !collapsed) {
      return 'hidden'
    }
    else if (!hidden && collapsed) {
      return 'collapsed'
    }
    else {
      return 'initial'
    }
  })

  isActiveListItem(itemLink: string) {
    return this._router.url.includes(itemLink)
  }

}
