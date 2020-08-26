import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    alwaysShow: true,
    name:'Home',
    meta:{
      title: '首页', 
      icon: 'dashboard', 
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        name: 'Homes',
        meta: { 
          title: '登录信息', 
          icon: 'dashboard', 
          path: '/home',
          roles: ['ROLE_SUPER']
        }
      }
    ]
  },
  // {
  //   path: '/user',
  //   component: Layout,
  //   redirect: '/user/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/user/index'),
  //       name: 'User-Index',
  //       meta: { 
  //         title: 'User', 
  //         icon: 'documentation', 
  //         path: '/user/index',
  //         roles: ['ROLE_SUPER']
  //         // breadcrumb:['Home','User-Index'], 
  //       }
  //     },
  //     {
  //       path: 'user-detail',
  //       component: () => import('@/views/user/detail/user'),
  //       name: 'User-Detail',
  //       hidden:true,
  //       meta: { 
  //         title: 'UserDetail', 
  //         icon: 'documentation', 
  //         activeMenu:'/user/index', 
  //         path: '/user/user-detail',
  //         breadcrumb:['Home','User-Index','User-Detail'],
  //         roles: ['ROLE_SUPER'] }
  //     },
  //     {
  //       path: 'merchant-detail',
  //       component: () => import('@/views/user/detail/merchant'),
  //       name: 'Merchant-Detail',
  //       hidden:true,
  //       meta: { 
  //         title: 'MerchantDetail', 
  //         icon: 'documentation', 
  //         activeMenu:'/user/index', 
  //         path: '/user/merchant-detail',
  //         breadcrumb:['Home','User-Index','Merchant-Detail'],
  //         roles: ['ROLE_SUPER'] }
  //     },
  //     {
  //       path: 'admin-detail',
  //       component: () => import('@/views/user/detail/admin'),
  //       name: 'Admin-Detail',
  //       hidden:true,
  //       meta: { 
  //         title: 'AdminDetail', 
  //         icon: 'documentation', 
  //         activeMenu:'/user/index', 
  //         path: '/user/admin-detail',
  //         breadcrumb:['Home','User-Index','Admin-Detail'],
  //         roles: ['ROLE_SUPER'] }
  //     },
  //     {
  //       path: 'payment-card',
  //       component: () => import('@/views/payment-card/detail'),
  //       name: 'User-PaymentCard',
  //       hidden:true,
  //       meta: { 
  //         title: 'PaymentCard', 
  //         icon: 'documentation', 
  //         activeMenu:'/user/index', 
  //         path: '/user/payment-card',
  //         breadcrumb:['Home','User-Index','User-Detail','User-PaymentCard'],
  //         roles: ['ROLE_SUPER'] },
  //     },
  //     {
  //       path: 'gift-card',
  //       component: () => import('@/views/gift-card/detail'),
  //       name: 'User-GiftCard',
  //       hidden:true,
  //       meta: { 
  //         title: 'GiftCard', 
  //         icon: 'documentation', 
  //         activeMenu:'/user/index', 
  //         path: '/user/gift-card',
  //         breadcrumb:['Home','User-Index','User-Detail','User-GiftCard'],
  //         roles: ['ROLE_SUPER'] },
  //     },
  //     {
  //       path: 'employee-detail',
  //       component: () => import('@/views/user/components/EmployeeDetail'),
  //       name: 'Merchant-EmployeeDetail',
  //       hidden:true,
  //       meta: { 
  //         title: 'EmployeeDetail', 
  //         icon: 'documentation', 
  //         activeMenu:'/user/index', 
  //         path: '/user/employee-detail',
  //         breadcrumb:['Home','User-Index','Merchant-Detail','Merchant-EmployeeDetail'],
  //         roles: ['ROLE_SUPER'] },
  //     }
  //   ]
  // },
  // {
  //   path: '/payment-card',
  //   component: Layout,
  //   redirect: '/payment-card/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/payment-card/index'),
  //       name: 'PaymentCard-Index',
  //       meta: { 
  //         title: 'PaymentCard', 
  //         icon: 'documentation', 
  //         path: '/payment-card/index',
  //         roles: ['ROLE_SUPER']
  //         // breadcrumb:['Home','PaymentCard-Index'], 
  //       }
  //     },
  //     {
  //       path: 'detail',
  //       component: () => import('@/views/payment-card/detail'),
  //       name: 'PaymentCard-Detail',
  //       hidden:true,
  //       meta: { 
  //         title: 'Detail', 
  //         icon: 'documentation', 
  //         activeMenu:'/payment-card/index', 
  //         path: '/payment-card/detail',
  //         breadcrumb:['Home','PaymentCard-Index','PaymentCard-Detail'],
  //         roles: ['ROLE_SUPER'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/gift-card',
  //   component: Layout,
  //   redirect: '/gift-card/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/gift-card/index'),
  //       name: 'GiftCard-Index',
  //       meta: { 
  //         title: 'GiftCard', 
  //         icon: 'documentation', 
  //         path: '/gift-card/index',
  //         roles: ['ROLE_SUPER']
  //         // breadcrumb:['Home','GiftCard-Index'], 
  //       }
  //     },
  //     {
  //       path: 'detail',
  //       component: () => import('@/views/gift-card/detail'),
  //       name: 'GiftCard-Detail',
  //       hidden:true,
  //       meta: { 
  //         title: 'Detail', 
  //         icon: 'documentation', 
  //         activeMenu:'/gift-card/index', 
  //         path: '/gift-card/detail',
  //         breadcrumb:['Home','GiftCard-Index','GiftCard-Detail'],
  //         roles: ['ROLE_SUPER'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/physical-card',
  //   component: Layout,
  //   redirect: '/physical-card/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/physical-card/index'),
  //       name: 'PhysicalCard-Index',
  //       meta: { 
  //         title: 'PhysicalCard', 
  //         icon: 'documentation', 
  //         path: '/physical-card/index',
  //         roles: ['ROLE_SUPER']
  //         // breadcrumb:['Home','GiftCard-Index'], 
  //       }
  //     },
  //     {
  //       path: 'detail',
  //       component: () => import('@/views/physical-card/detail'),
  //       name: 'PhysicalCard-Detail',
  //       hidden:true,
  //       meta: { 
  //         title: 'Detail', 
  //         icon: 'documentation', 
  //         activeMenu:'/physical-card/index', 
  //         path: '/physical-card/detail',
  //         breadcrumb:['Home','PhysicalCard-Index','PhysicalCard-Detail'],
  //         roles: ['ROLE_SUPER'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/bill',
  //   component: Layout,
  //   redirect: '/bill/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/bill/index'),
  //       name: 'Bill-Index',
  //       meta: { 
  //         title: 'BillCard', 
  //         icon: 'documentation', 
  //         path: '/bill/index',
  //         roles: ['ROLE_SUPER']
  //         // breadcrumb:['Home','GiftCard-Index'], 
  //       }
  //     },
  //     {
  //       path: 'detail',
  //       component: () => import('@/views/bill/detail'),
  //       name: 'Bill-Detail',
  //       hidden:true,
  //       meta: { 
  //         title: 'Detail', 
  //         icon: 'documentation', 
  //         activeMenu:'/bill/index', 
  //         path: '/bill/detail',
  //         breadcrumb:['Home','Bill-Index','Bill-Detail'],
  //         roles: ['ROLE_SUPER'] }
  //     }
  //   ]
  // }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
