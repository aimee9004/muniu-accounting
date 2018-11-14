import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import CommonList from '../views/main-page/list'
import AddInfo from '../views/main-page/add-info'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
let ifHidden = false
// console.log('============', ifHidden)
// let roleAssignment = {
//     'agent-index': ['']
// }
export const constantRouterMap = [
    { path: '/login', component: () => import('@/views/login/index'), hidden: true },
    { path: '/404', component: () => import('@/views/404'), hidden: true },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        hidden: true,
        children: [{
            path: 'dashboard',
            component: () => import('@/views/dashboard/index')
        }]
    },

    // 代理商管理
    {
        path: '/agent-manage',
        component: Layout,
        redirect: '/agent-manage/index',
        hidden: ifHidden,
        children: [
            {
                path: 'index',
                name: 'agent-index',
                component: CommonList,
                meta: { title: '代理商管理', icon: 'test' }
            }, {
                path: 'new-agent',
                name: 'new-agent',
                hidden: true,
                component: AddInfo
            }
        ]
    },
    
    // 财务公司管理
    {
        path: '/finance_company-manage',
        component: Layout,
        redirect: '/finance_company-manage/index',
        hidden: ifHidden,
        children: [{
            path: 'index',
            name: 'finance_company-index',
            component: CommonList,
            meta: { title: '财务公司管理', icon: 'test' }
        }]
    },
    
    // 企业账簿管理
    {
        path: '/busi_books-manage',
        component: Layout,
        redirect: '/busi_books-manage/index',
        hidden: ifHidden,
        children: [{
            path: 'index',
            name: 'busi_books-index',
            component: CommonList,
            meta: { title: '企业账簿管理', icon: 'test' }
        }]
    },
    
    // 充值订单管理
    {
        path: '/recharge_order-manage',
        component: Layout,
        redirect: '/recharge_order-manage/index',
        hidden: ifHidden,
        children: [{
            path: 'index',
            name: 'recharge_order-index',
            component: CommonList,
            meta: { title: '充值订单管理', icon: 'test' }
        }]
    },
    
    // 财务管理
    {
        path: '/financing-manage',
        component: Layout,
        redirect: '/financing-manage/index',
        hidden: ifHidden,
        children: [{
            path: 'index',
            name: 'financing-index',
            component: CommonList,
            meta: { title: '财务管理', icon: 'test' }
        }]
    },
    
    // 设置
    {
        path: '/setting-manage',
        component: Layout,
        redirect: '/setting-manage/index',
        hidden: ifHidden,
        children: [{
            path: 'index',
            name: 'setting-index',
            component: CommonList,
            meta: { title: '设置', icon: 'test' }
        }]
    },

    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        name: 'Example',
        meta: { title: 'Example', icon: 'example' },
        children: [
            {
                path: 'table',
                name: 'Table',
                component: () => import('@/views/table/index'),
                meta: { title: 'Table', icon: 'table' }
            },
            {
                path: 'tree',
                name: 'Tree',
                component: () => import('@/views/tree/index'),
                meta: { title: 'Tree', icon: 'tree' }
            }
        ]
    },

    {
        path: '/form',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Form',
                component: () => import('@/views/form/index'),
                meta: { title: 'Form', icon: 'form' }
            }
        ]
    },

    {
        path: '/nested',
        component: Layout,
        redirect: '/nested/menu1',
        name: 'Nested',
        meta: {
            title: 'Nested',
            icon: 'nested'
        },
        children: [
        {
            path: 'menu1',
            component: () => import('@/views/nested/menu1/index'), // Parent router-view
            name: 'Menu1',
            meta: { title: 'Menu1' },
            children: [
                {
                    path: 'menu1-1',
                    component: () => import('@/views/nested/menu1/menu1-1'),
                    name: 'Menu1-1',
                    meta: { title: 'Menu1-1' }
                },
                {
                    path: 'menu1-2',
                    component: () => import('@/views/nested/menu1/menu1-2'),
                    name: 'Menu1-2',
                    meta: { title: 'Menu1-2' },
                    children: [
                    {
                        path: 'menu1-2-1',
                        component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                        name: 'Menu1-2-1',
                        meta: { title: 'Menu1-2-1' }
                    },
                    {
                        path: 'menu1-2-2',
                        component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                        name: 'Menu1-2-2',
                        meta: { title: 'Menu1-2-2' }
                    }
                    ]
                },
                {
                    path: 'menu1-3',
                    component: () => import('@/views/nested/menu1/menu1-3'),
                    name: 'Menu1-3',
                    meta: { title: 'Menu1-3' }
                }
            ]
        },
        {
            path: 'menu2',
            component: () => import('@/views/nested/menu2/index'),
            meta: { title: 'menu2' }
        }
        ]
    },

    {
        path: 'external-link',
        component: Layout,
        children: [
            {
                path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
                meta: { title: 'External Link', icon: 'link' }
            }
        ]
    },

    { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})
