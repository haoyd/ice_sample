// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: 'feedback',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
    id: 'Menu_apmdr',
  },

  {
    name: 'help',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
    id: 'Menu_2itu5',
  },
];

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home2',
    children: [
      { name: 'monitor', path: '/dashboard/monitor', id: 'Menu_aqwxs' },
    ],
    id: 'Menu_2q7nq',
  },
  {
    name: 'chart',
    path: '/chart',
    icon: 'chart',
    children: [
      { name: 'basic', path: '/chart/basic', id: 'Menu_8773v' },
      { name: 'general', path: '/chart/general', id: 'Menu_2wv94' },
    ],
    id: 'Menu_719p6',
  },
  {
    name: '表格页',
    path: '/table',
    icon: 'cascades',
    children: [
      { name: 'basic', path: '/table/basic', id: 'Menu_d2coj' },
      { name: 'general', path: '/table/general', id: 'Menu_fm00b' },
    ],
    id: 'Menu_qiv4u',
  },
  {
    name: '列表页',
    path: '/list',
    icon: 'menu',
    children: [
      { name: 'basic', path: '/list/basic', id: 'Menu_yegkb' },
      { name: 'general', path: '/list/general', id: 'Menu_5pcj2' },
    ],
    id: 'Menu_ld3qk',
  },
  {
    name: 'profile',
    path: '/profile',
    icon: 'content',
    children: [
      { name: 'basic', path: '/profile/basic', id: 'Menu_f4aov' },
      { name: 'terms', path: '/profile/general', id: 'Menu_pi1n6' },
    ],
    id: 'Menu_6l7jk',
  },
  {
    name: 'result',
    path: '/result',
    icon: 'question',
    children: [
      { name: 'success', path: '/result/success', id: 'Menu_c6crb' },
      { name: 'fail', path: '/result/fail', id: 'Menu_08efg' },
    ],
    id: 'Menu_aqk12',
  },
  {
    name: 'account',
    path: '/account',
    icon: 'yonghu',
    children: [{ name: 'setting', path: '/account/setting', id: 'Menu_7msyi' }],
    id: 'Menu_0s4ax',
  },
  {
    name: 'exception',
    path: '/exception',
    icon: 'notice',
    children: [
      { name: '204', path: '/exception/204', id: 'Menu_dmii4' },
      { name: '403', path: '/exception/403', id: 'Menu_5ucwh' },
      { name: '404', path: '/exception/404', id: 'Menu_33ui6' },
      { name: '500', path: '/exception/500', id: 'Menu_997i6' },
    ],
    id: 'Menu_ue1yg',
  },
  {
    name: '示例代码',
    path: '/demo',
    icon: 'cascades',
    children: [
      { name: '表单测试', path: '/demo/form', id: 'Menu_dmii4' },
    ],
    id: 'Menu_c3ckw' },
];

export { headerMenuConfig, asideMenuConfig };
