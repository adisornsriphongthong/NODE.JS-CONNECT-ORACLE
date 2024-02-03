import oracledb, { Connection } from 'oracledb';

const poolReader = {
    query: async (query: string, param: any[]) => {
        let connection: Connection;
        try {
            connection = await oracledb.getConnection({
                user: 'sys',
                password: '0953314906Get*',
                connectString: '//localhost:1521/orcl',
                privilege: oracledb.SYSDBA,
            });
            const result = await connection.execute(query, param)  
            return result.rows
        } catch (error) {
            throw error
        }
    }
}

export { poolReader };
