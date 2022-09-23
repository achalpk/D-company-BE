const {dbConn} = require('../library/database');

const welcomeFunction = async ()=>{
    const db = dbConn();
    try{
        let result = await db.query('SELECT * FROM welcome');
        return result;
    }
    catch(error){
        return false;
    }
    finally{
        await db.close();
    }
}

module.exports={welcomeFunction}


