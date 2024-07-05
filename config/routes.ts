//包含两个/的才会开启多标签页

import BoxStatisticsPage from "@/pages/project/BoxStatisticsPage";

export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './user/login' }],
  },
  {
    path:'/create-code',
    name:'生成编码',
    routes: [
      {
        path: '/create-code/boxCode',
        name: 'BoxCodes',
        component: '@/pages/create-code/BoxCodeCreatePage'
      },
      {
        path: '/create-code/cascadeCode',
        name: 'CascadeCableCodes',
        component: '@/pages/create-code/CascadeCodePage'
      },
      {
        path: '/create-code/dropCode',
        name: 'DropCableCodes',
        component: '@/pages/create-code/DropCablePage'
      }
    ]
  },
  {
    path: '/project',
    name: 'Project',
    routes: [
      {
        path: '/project/area',
        name: 'Zone Configuration',
        component: '@/pages/project/ZoneConfigurationPage'
      },
      {
        path: '/project/boxStatistics',
        name: 'BoxStatistics',
        component: '@/pages/project/BoxStatisticsPage'
      }
    ]
  },
  {
    path: '/topology',
    name: '拓扑图',
    routes: [
      {
        name: '地图',
        path: '/topology/topo',
        component: '@/pages/topology/TopologyPage',
      },
    ],
  },
  {
    path: '/map',
    name: '资源管理',
    icon: 'icon-xiangmu',
    routes: [
      { path: '/map', redirect: '/map/page' },
      { path: '/map/page', name: '资源地图', component: '@/pages/map/maps' },
    ],
  },
  {
    path: '/organize-manage',
    name: '组织管理',
    icon: 'icon-chengyuanguanli',
    routes: [
      { path: '/organize-manage', redirect: '/organize-manage/organize' },
      {
        path: '/organize-manage/organize',
        name: '组织管理',
        component: '@/pages/organize-manage/organize/OrganizeListPage',
      },
      {
        path: '/organize-manage/user',
        name: '用户管理',
        component: '@/pages/organize-manage/user/UserListPage',
      },
      {
        path: '/organize-manage/role',
        name: '角色管理',
        component: '@/pages/organize-manage/role/RoleListPage',
      },
    ],
  },
  { path: '/', redirect: '/create-code/boxCode' },
  { path: '*', layout: false, component: './404' },
];
