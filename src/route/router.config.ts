import { lazy } from 'react'
import { RouteRule } from '@/types/index'
import App from '@/App'

export const routes: RouteRule[] = [
	{
		path: '/',
		exact: true,
		redirect: '/home',
		component: App,
	},
	{
		path: '/home',
		exact: true,
		component: lazy(() => import('@/pages/home/index')),
	},
	{
		path: '/dashboard',
		exact: true,
		component: lazy(() => import('@/pages/home/index')),
	},
]
