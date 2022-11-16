export interface RouteRule {
	hidden?: boolean
	path?: string
	component?: any
	exact?: boolean
	title?: string
	children?: RouteRule[]
	redirect?: string
	access?: string[]
	icon?: string
	affix?: boolean
}

export interface RouteViewProps {
	path?: string
	redirect?: string
	component?: any
	exact?: boolean
	location?: any
	children?: RouteViewProps[]
}
