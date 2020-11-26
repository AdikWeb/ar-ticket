export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Главная панель',
        to: '/panel',
        icon: 'panel',
      }, {
        _name: 'CSidebarNavItem',
        name: 'Пользователи',
        to: '/users',
        icon: 'custUser',
      }, {
        _name: 'CSidebarNavItem',
        name: 'Контрагенты',
        to: '/contractors',
        icon: 'packageIcon',
      }, {
        _name: 'CSidebarNavItem',
        name: 'Типы подарков',
        to: '/types-of-gifts',
        icon: 'gift',
      }, {
        _name: 'CSidebarNavItem',
        name: 'Точки выдачи подарков',
        to: '/gifts-points',
        icon: 'geo-alt',
      }, {
        _name: 'CSidebarNavItem',
        name: 'Карты',
        to: '/maps',
        icon: 'cil-map',
      },
    ]
  }
]
