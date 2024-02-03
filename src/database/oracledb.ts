import oracledb from 'oracledb';
import { poolReader } from '../config/database.config';

const oracleDatabase = async () => {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: 'sys',
            password: '0953314906Get*',
            connectString: '//localhost:1521/orcl',
            privilege: oracledb.SYSDBA,
        });
        const param: string[] = ['1', '2']; // Use an array for the bind variable
        // Perform your database operations here
        const result: any = await poolReader.query('SELECT * FROM MY_ACCOUNT WHERE account_id = :1 OR account_id = :2', param)
        // Display or process the query result as needed
        const resultList: string[] = result?.map((e: any) => {
            return {
                '_id': String(e[0]),
                '_username': String(e[1]),
                '_binance': String(e[2]),
                '_date': String(e[3])
            }
        })

        console.log(resultList)

    } catch (error: any) {
        console.error('Error connecting to Oracle database:', error.message);
    } finally {
        if (connection) {
            try {
                await connection.close();
                console.log('Connection closed');
            } catch (error) {
                console.error('Error closing connection:', error);
            }
        }
    }
};

export default { oracleDatabase };
