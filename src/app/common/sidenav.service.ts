import { Injectable, signal } from '@angular/core'

@Injectable()
export default class SidenavService {

  collapsed = signal(false)

}
