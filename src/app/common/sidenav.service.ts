import { Injectable, computed, signal } from '@angular/core'

@Injectable()
export default class SidenavService {

  hidden = signal(false)
  collapsed = signal(false)

  state = computed(() => {
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

}
