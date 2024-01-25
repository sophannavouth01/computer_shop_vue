export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'dashboard',
      meta: {
        icon: 'equalizer',
      },
    },
    
    {
      name: 'Products',
      displayName: 'Products',
      meta: {
        icon: 'phonelink',
      },
      disabled: true,
      children: [
        {
          name: 'product-list',
          displayName: 'Product List',
        },
        
      ],
    },
    {
      name: 'stock-in',
      displayName: 'Stock In',
      meta: {
        icon: 'archive',
      },
      disabled: true,
      children: [
        {
          name: 'stock-entry',
          displayName: 'Stock Entry',
        },
        {
          name: 'stock-adjustment',
          displayName: 'Stock Adjustment',
        },
      ],
    },
    
    {
      name: 'records',
      displayName: 'Records',
      meta: {
        icon: 'shop_two',
      },
      disabled: true,
      children: [
        {
          name: 'sale-history',
          displayName: 'Sale History',
        },
        
      ],
    },
    {
      name: 'settings',
      displayName: 'Setting',
      meta: {
        icon: 'settings',
      },
      disabled: true,
      children: [
        {
          name: 'all-user',
          displayName: 'All User',
        },
       
        
      ],
    },
    
  ] as INavigationRoute[],
}
