import { animate, animateChild, group, keyframes, query, state, style, transition, trigger } from '@angular/animations'


export interface NavItem {
  icon?: string
  label: string
  routerLink: string
  expanded?: boolean
  items?: NavItem[]
}

interface NavigationItems {
  main: NavItem[]
  footer?: NavItem[]
}

export const navItems: NavigationItems = {
  main: [
    {
      label: 'Inbox',
      icon: 'mail',
      routerLink: 'inbox',
      items: [
        {
          label: 'Scheduled',
          routerLink: 'inbox/scheduled',
          items: [
            {
              label: 'Tomorrow',
              routerLink: 'inbox/scheduled/tomorrow'
            },
            {
              label: 'In a week',
              routerLink: 'inbox/scheduled/week'
            },
            {
              label: 'In a month',
              routerLink: 'inbox/scheduled/month'
            }
          ]
        }
      ]
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
      expanded: false,
      items: [
        {
          label: 'All documents',
          routerLink: 'document'
        },
        {
          label: 'Music',
          routerLink: 'document/music'
        },
        {
          label: 'Videos',
          routerLink: 'document/videos'
        },
        {
          label: 'Office',
          routerLink: 'document/office'
        }
      ]
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

export const animateSidenav = trigger('animSidenav', [
  state('initial', style({ width: '250px', left: 0 })),
  state('collapsed', style({ width: '80px', left: 0 })),
  state('hidden', style({ width: '250px', left: '-250px' })),
  state('all', style({ width: '80px', left: '-80px' })),
  transition('* <=> *',
    group([
      query('@*', animateChild(), { optional: true }),
      animate('0.5s ease')
    ])
  )
])

export const animateMain = trigger('animMain', [
  state('initial',
    style({ marginLeft: '{{marginLeftInitial}}' }),
    { params: { marginLeftInitial: '250px' } }
  ),
  state('collapsed',
    style({ marginLeft: '{{marginLeftCollapsed}}' }),
    { params: { marginLeftCollapsed: '80px' } }
  ),
  state('hidden', style({ marginLeft: 0 })),
  state('all', style({ marginLeft: 0 })),
  transition('* <=> *', animate('0.5s ease'))
])

export const animateToggleSidenavBtn = trigger('animToggleSidenavBtn', [
  state('initial', style({ left: 'calc(250px - 26px / 2)', opacity: 1 })),
  state('collapsed', style({ left: 'calc(80px - 26px / 2)', opacity: 1 })),
  state('hidden', style({ left: '-26px', opacity: 0 })),
  state('all', style({ left: '-26px', opacity: 0 })),
  transition('* <=> *', animate('0.5s ease'))
])

export const toggleSubmenu = trigger('toggleSubmenu', [
  state('false', style({ height: 0, overflow: 'hidden' })),
  state('true', style({ height: '*', overflow: 'visible' })),
  transition('false <=> true', animate('0.25s linear')),
])

export const fadeInOut = trigger('fadeInOut', [
  state('false', style({ width: '100px', opacity: 1 })),
  state('true', style({ width: 0, opacity: 0 })),
  transition('false <=> true', animate('0.35s ease'))
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

