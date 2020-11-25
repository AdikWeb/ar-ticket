export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Login',
        to: '/pages/login'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Register',
        to: '/pages/register'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Users',
        route: 'users',
        icon: 'cil-bell',
        items: [
          {
            name: 'List',
            to: '/users/list'
          },
          {
            name: 'Create',
            to: '/users/create'
          },
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Actions',
        route: '/actions',
        icon: 'cil-bell',
        items: [
          {
            name: 'List',
            to: '/actions/list'
          },
          {
            name: 'Create',
            to: '/actions/create'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Map',
        to: '/map'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Error 404',
        to: '/pages/404'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Error 500',
        to: '/pages/500'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Buttons',
        route: '/buttons',
        icon: 'cil-cursor',
        items: [
          {
            name: 'Buttons',
            to: '/buttons/standard-buttons'
          },
          {
            name: 'Button Dropdowns',
            to: '/buttons/dropdowns'
          },
          {
            name: 'Button Groups',
            to: '/buttons/button-groups'
          },
          {
            name: 'Brand Buttons',
            to: '/buttons/brand-buttons'
          }
        ]
      },
    ]
  }
]