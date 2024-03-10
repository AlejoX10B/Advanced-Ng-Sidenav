import { animate, animateChild, group, keyframes, query, state, style, transition, trigger } from '@angular/animations'

export const navItems = {
  main: [
    {
      label: 'Inbox',
      icon: 'mail',
      routerLink: 'inbox',
    },
    {
      label: 'Starred',
      icon: 'star',
      routerLink: 'starred',
    },
    {
      label: 'Sent',
      icon: 'send',
      routerLink: 'sent',
    },
    {
      label: 'Document',
      icon: 'description',
      routerLink: 'document',
    },
    {
      label: 'Important',
      icon: 'bookmark',
      routerLink: 'important',
    },
    {
      label: 'Spam',
      icon: 'report',
      routerLink: 'spam',
    },
    {
      label: 'Trash',
      icon: 'delete',
      routerLink: 'trash',
    },
  ],
  footer: [
    {
      label: 'Settings',
      icon: 'settings',
      routerLink: 'settings'
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

export const moveButton = trigger('moveBtn', [
  state('false', style({ left: 'calc(250px - 26px / 2)' })),
  state('true', style({ left: 'calc(80px - 26px / 2)' })),
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
