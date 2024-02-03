import { Router, Request, Response } from "express";
import accountController from "../../controller/account.controller";

const router = Router()

router.get(
    '/getAccount',
    accountController.getAccount
)

export default router