import { animate, animateChild, group, keyframes, query, state, style, transition, trigger } from '@angular/animations'

export const navItems = {
  main: [
    {
      label: 'Inbox',
      icon: 'mail',
      routerLink: '',
    },
    {
      label: 'Starred',
      icon: 'star',
      routerLink: '',
    },
    {
      label: 'Sent',
      icon: 'send',
      routerLink: '',
    },
    {
      label: 'Document',
      icon: 'description',
      routerLink: '',
    },
    {
      label: 'Important',
      icon: 'bookmark',
      routerLink: '',
    },
    {
      label: 'Spam',
      icon: 'report',
      routerLink: '',
    },
    {
      label: 'Trash',
      icon: 'delete',
      routerLink: '',
    },
  ],
  footer: [
    {
      label: 'Settings',
      icon: 'settings',
      routerLink: ''
    },
    {
      label: 'Log Out',
      icon: 'logout',
      routerLink: ''
    }
  ]
}

export const collapseSidenav = trigger('collapsedNav', [
  state('false', style({ width: '250px' })),
  state('true', style({ width: '80px' })),
  transition('false <=> true',
    group([
      query('@*', animateChild()),
      animate('0.5s ease')
    ])
  )
])

export const expandMain = trigger('expandedMain', [
  state('false', style({ marginLeft: '250px' })),
  state('true', style({ marginLeft: '80px' })),
  transition('false <=> true', animate('0.5s ease'))
])

export const fadeInOut = trigger('fadeInOut', [
  state('false', style({ width: '100px', opacity: 1 })),
  state('true', style({ width: 0, opacity: 0 })),
  transition('false <=> true', animate('0.25s ease'))
])

export const rotate = trigger('rotate', [
  state('false', style({})),
  transition('true => false',
    animate('0.5s cubic-bezier(0.3, -0.25, 0.7, 1.25)',
      keyframes([
        style({ transform: 'rotate(0deg)' }),
        style({ transform: 'rotate(1turn)' }),
      ])
    )
  )
])
