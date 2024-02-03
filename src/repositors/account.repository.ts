import { poolReader } from "../config/database.config"


interface IAccount {
    _id: string;
    _username: string;
    _binace: string;
    _date: string;
}

const getAccount = async () => {
    try {
        const sql = ` SELECT
                        *
                      FROM
                        MY_ACCOUNT
                      WHERE ACCOUNT_ID = :num `
        const num = '3'
        const param = { num: num }

        const result = await poolReader.query(sql, param)
        
        const resultList: IAccount[] = result?.map((row: any) => {
            return {
                _id: String(row[0]),
                _username: String(row[1]),
                _binace: String(row[2]),
                _date: String(row[3]),
            };
        }) || [];
        
        return resultList
    } catch (error) {
        throw error
    }
}

export default {
    getAccount
}