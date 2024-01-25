import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'
import Page404Layout from '../layouts/Page404Layout.vue'
import AppLayoutUser from '../layouts/AppLayoutUser.vue'
import RouteViewComponent from '../layouts/RouterBypass.vue'
import UIRoute from '../pages/admin/ui/route'
import AppLayoutCashier from '../layouts/AppLayoutCashier.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'login' },
  },
  {
    name: 'admin',
    path: '/admin',
    component: AppLayout,
    meta: { requiresAuth: true }, // Protect all child routes
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'products',
        path: 'prudcuts',
        component: RouteViewComponent,
        children: [
          {
            name: 'product-list',
            path: 'product-list',
            component: () => import('../pages/admin/products/product-list/ProductList.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
            },
          },
          {
            name: 'category',
            path: 'category',
            component: () => import('../pages/admin/products/category/Category.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars',
            },
          },
          {
            name: 'brand',
            path: 'brand',
            component: () => import('../pages/admin/products/brand/Brand.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars',
            },
          },
          {
            name: 'add-brand',
            path: 'add-brand',
            component: () => import('../components/admin/AddBrand.vue'),
          },
          {
            name: 'edit-brand',
            path: 'edit-brand/:id',
            component: () => import('../components/admin/EditBrand.vue'),
          },
          
          {
            name: 'edit-product',
            path: 'edit-product/:id',
            component: () => import('../components/admin/EditProduct.vue'),
          },
          {
            name: 'add-category',
            path: 'add-category',
            component: () => import('../components/admin/AddCategory.vue'),
          },
        ],
      },
      {
        name: 'stock-in',
        path: 'stock-in',
        component: RouteViewComponent,
        children: [
          {
            name: 'stock-entry',
            path: 'stock-entry',
            component: () => import('../pages/admin/stock-in/stock-entry/StockEntry.vue'),

          },
          {
            name: 'add-product',
            path: 'add-product',
            component: () => import('../components/admin/AddProduct.vue'),
          },
          {
            name: 'edit-entry',
            path: 'edit-entry/:id',
            component: () => import('../components/admin/EditStockIn.vue'),

          },
          {
            name: 'stock-adjustment',
            path: 'stock-adjustment',
            component: () => import('../pages/admin/stock-in/stock-adjustment/StockAdjustment.vue'),

          },
        ],
      },

      {
        name: 'supplier',
        path: 'supplier',
        component: RouteViewComponent,
        children: [
          {
            name: 'store',
            path: 'store',
            component: () => import('../pages/admin/supplier/store/Store.vue'),
          },
        ],
      },
      {
        name: 'records',
        path: 'records',
        component: RouteViewComponent,
        children: [
          {
            name: 'sale-history',
            path: 'sale-history',
            component: () => import('../pages/admin/records/sale-history/SaleHistory.vue'),
          },
          
        ],
      },
      {
        name: 'settings',
        path: 'settings',
        component: RouteViewComponent,
        children: [
          {
            name: 'all-user',
            path: 'all-user',
            component: () => import('../pages/admin/settings/all-user/AllUser.vue'),
          },
          {
            name: 'add-user',
            path: 'add-user',
            component: () => import('../components/admin/Adduser.vue'),
          },
          {
            name: 'edit-user',
            path: 'edit-user/:id',
            component: () => import('../components/admin/EditUser.vue'),
          },
          {
            name: 'profile',
            path: 'profile',
            component: () => import('../pages/admin/settings/profile-user/Profile.vue')
          },

        ],
      },
      {
        name: 'frontend',
        path: 'frontend',
        component: RouteViewComponent,
        meta: { requiresAuth: true }, // Protect all child routes

        children: [
          {
            name: 'home-frontend',
            path: 'home-frontend',
            component: () => import('../pages/admin/frontend/Frontend.vue'),
          },
          {
            name: 'pos-record',
            path: 'pos-record',
            component: () => import('../pages/admin/records/pos-record/PosRecord.vue'),
          },
          
        ],
      },
      UIRoute,
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('../pages/auth/login/Login.vue'),
      },
      {
        name: 'signup',
        path: 'signup',
        component: () => import('../pages/auth/signup/Signup.vue'),
      },
      {
        name: 'recover-password',
        path: 'recover-password',
        component: () => import('../pages/auth/recover-password/RecoverPassword.vue'),
      },
      {
        path: '',
        redirect: { name: 'login' },
      },
    ],
  },
  {
    path: '/404',
    component: Page404Layout,
    children: [
      {
        name: 'not-found-advanced',
        path: 'not-found-advanced',
        component: () => import('../pages/404-pages/VaPageNotFoundSearch.vue'),
      },
      {
        name: 'not-found-simple',
        path: 'not-found-simple',
        component: () => import('../pages/404-pages/VaPageNotFoundSimple.vue'),
      },
      {
        name: 'not-found-custom',
        path: 'not-found-custom',
        component: () => import('../pages/404-pages/VaPageNotFoundCustom.vue'),
      },
      {
        name: 'not-found-large-text',
        path: '/pages/not-found-large-text',
        component: () => import('../pages/404-pages/VaPageNotFoundLargeText.vue'),
      },
    ],
  },
  {
    name: 'cashier',
    path: '/cashier',
    component: AppLayoutCashier,
    children: [
      {
        name: 'home-cashier',
        path: 'home-cashier',
        component: () => import('../pages/cashier/home/HomeView.vue'),
      },
      {
        name: 'pos-order',
        path: 'pos-order',
        component: () => import('../pages/cashier/purchase-order/POS.vue'),
      },
      {
        name: 'pos-order-payment',
        path: 'pos-order-payment',
        component: () => import('../pages/cashier/payment/Payment.vue'),
      },
    ],
  },
  {
    name: 'user',
    path: '/user',
    component: AppLayoutUser,
    children: [
      {
        name: 'home',
        path: 'home',
        component: () => import('../pages/user/home/HomeView.vue'),
      },
      {
        name: 'laptop',
        path: 'laptop',
        component: () => import('../pages/user/laptop/Laptop.vue'),
      },
      {
        name: 'desktop',
        path: 'desktop',
        component: () => import('../pages/user/desktop/Desktop.vue'),
      },
      {
        name: 'accessory',
        path: 'accessory',
        component: () => import('../pages/user/accessory/Accessory.vue'),
      },
      {
        name: 'laptop',
        path: 'laptop',
        component: () => import('../pages/user/laptop/Laptop.vue'),
      },
      {
        name: 'contact',
        path: 'contact',
        component: () => import('../pages/user/contact/Contact.vue'),
      },
      {
        name: 'detail',
        path: 'detail/:id',
        component: () => import('../pages/user/details/Details.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      document.querySelector('.app-layout__page')?.scrollTo(0, 0)
    }  
  },
  routes,
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); // Replace with your auth check
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    next({ name: 'login' }); // Redirect to login if not authenticated
  } else {
    next(); // Proceed if authenticated or no auth required
  }
});

export default router
