const mysql = require( 'mysql' );
const util = require('util');

const dbConn = ()=>{
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '8547',
        database: 't_company'
    })
    return {
        query( sql, args ) {
          return util.promisify( connection.query )
            .call( connection, sql, args );
        },
        close() {
          return util.promisify( connection.end ).call( connection );
        }
      };
}



module.exports={dbConn}
