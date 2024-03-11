import { Component, HostListener, OnInit, computed, inject, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { animateMain, animateSidenav } from '../common/sidenav/sidenav.constants'

import SidenavService from '../common/sidenav.service'
import SidenavComponent from '../common/sidenav/sidenav.component'
import ToolbarComponent from '../common/toolbar/toolbar.component'


@Component({
  imports: [
    RouterOutlet,
    SidenavComponent,
    ToolbarComponent
  ],
  animations: [
    animateSidenav,
    animateMain
  ],
  standalone: true,
  selector: 'home',
  template: `
    <aside sidenav [@animSidenav]="state()"></aside>

    <main [@animMain]="animMainConfig()">
      <toolbar />
      
      <div class="content">
        <router-outlet />
      </div>
    </main>
  `,
  styleUrl: './home.component.css',
})
export default class HomeComponent implements OnInit {

  private _sidenavService = inject(SidenavService)

  private _windowWidth = signal<number>(0)

  collapsed = this._sidenavService.collapsed
  hidden = this._sidenavService.hidden
  state = this._sidenavService.state

  animMainConfig = computed(() => {
    if (this._windowWidth() <= 768) {
      return {
        value: this.state(),
        params: {
          marginLeftInitial: '0px',
          marginLeftCollapsed: '0px'
        }
      }
    }

    return {
      value: this.state(),
      params: {
        marginLeftInitial: '250px',
        marginLeftCollapsed: '80px'
      }
    }
  })

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target.innerWidth
    this._windowWidth.set(width)
  }

  ngOnInit() {
    const width = window.innerWidth

    this._windowWidth.set(width)
    if (width < 768) {
      this.collapsed.set(true)
      this.hidden.set(true)
    }
  }

}
