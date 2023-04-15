import { RouteType } from "./interfaces"
import homeRoutes from "@modules/home/routes"
import errorRoutes from "@modules/error/routes"

const routes: RouteType[] = [
    ...homeRoutes,
    ...errorRoutes,
]

const routesKeys = routes.reduce((acc: string[], route) => {
    acc.push(route.key)
    if (route.subRoutes) route.subRoutes.forEach(subRoute => acc.push(subRoute.key))
    return acc
}, [])

const validationRoutesKeys = ['']
const notShowRoutesKeys = [
    ...errorRoutes.map(i => i.key),
]

export { routes, routesKeys, validationRoutesKeys, notShowRoutesKeys }