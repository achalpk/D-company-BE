const mysql = require( 'mysql' );
const util = require('util');
const {host, user, password, database} = require('../config');

const dbConn = ()=>{
    const connection = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database
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
