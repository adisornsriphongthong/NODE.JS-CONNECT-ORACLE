import { Router, Request, Response } from "express";
import accountService from "../service/account.service";

const getAccount = async (req: Request, res: Response) => {
    try {
        const result = await accountService.getAccount()
        res.json({
            result
        })
    } catch (error) {
        console.log(error)
    }
}

export default {
    getAccount
}