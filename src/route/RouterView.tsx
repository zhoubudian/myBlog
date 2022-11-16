import { redirect, Route, Routes } from 'react-router-dom'
import { routes } from './router.config'
import { RouteViewProps } from '@/types/index'
import { useState } from 'react'

const RouteView = (props: RouteViewProps) => {
	const [] = useState(null)
	const pathname = props.location?.pathname
	// const isLogin =
}
