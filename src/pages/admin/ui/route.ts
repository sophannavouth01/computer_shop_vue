import RouteViewComponent from '../../../layouts/RouterBypass.vue'

export default {
  name: 'ui',
  path: 'ui',
  component: RouteViewComponent,
  children: [
   
    
    {
      name: 'color-pickers',
      path: 'color-pickers',
      component: () => import('../../../pages/admin/ui/color-pickers/ColorPickers.vue'),
      meta: {
        wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Color-Pickers',
      },
    },
    // {
    //   name: "timelines",
    //   path: "timelines",
    //   component: () => import("../../../pages/admin/ui/timelines/Timelines.vue"),
    //   meta: {
    //     wikiLink: "https://github.com/epicmaxco/vuestic-admin/wiki/Timelines",
    //   },
    // },
   
    {
      path: 'icons',
      component: () => import('../../../pages/admin/ui/icons/Icons.vue'),
      children: [
        {
          name: 'icon-sets',
          path: '', // Default route
          component: () => import('../../../pages/admin/ui/icons/SetsList.vue'),
          meta: {
            wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Icons',
          },
        },
        {
          name: 'icon-set',
          path: ':name',
          component: () => import('../../../pages/admin/ui/icons/IconSet.vue'),
          props: true,
          meta: {
            wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Icons',
          },
        },
      ],
    },
    
    {
      name: 'colors',
      path: 'colors',
      component: () => import('../../../pages/admin/ui/colors/Colors.vue'),
    },
   
    
  ],
}
