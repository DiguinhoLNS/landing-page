import { mdiHome } from "@mdi/js"
import { RouteType } from "@routes/interfaces"

const homeRoutes: RouteType[] = [
    {
        key: 'home',
        path: 'home',
        title: 'Home',
        icon: mdiHome,
    }
]

export default homeRoutes