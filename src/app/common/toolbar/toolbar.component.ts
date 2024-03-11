import { Component, inject } from '@angular/core'

import SidenavService from '../sidenav.service'


@Component({
  imports: [],
  standalone: true,
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export default class ToolbarComponent {

  private _sidenavService = inject(SidenavService)

  hidden = this._sidenavService.hidden

}
