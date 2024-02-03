import { Router } from "express"; 
import routerService from "./serviceRoute/serviceRoute.route";

const router = Router()

router.use('/milo/service', routerService)

export default router
