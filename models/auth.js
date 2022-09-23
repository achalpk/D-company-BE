const {dbConn} = require('../library/database');

const signUpFunction = async (data)=>{
    const db = dbConn();
    try{
        await db.query('INSERT INTO users (username, password, first_name,last_name,phone,email,address,dob) VALUES (?,md5(?),?,?,?,?,?,?)', 
                                    [data.username, data.password, data.first_name, data.last_name, data.phone, data.email, data.address, data.dob]);
        // console.log("Successfully Inserted");
        return true;
    }
    catch(error){
        // console.log(error);
        return false
    }
    finally{
        db.close();
    }
}


const logInFunction = async (data)=>{
    const db = dbConn();
    try{
        let result = await db.query('SELECT * FROM users WHERE username=? AND password=md5(?)', 
                                    [data.username, data.password]);
        return result;
    }
    catch(error){
        return error;
    }
    finally{
        await db.close();
    }
}

module.exports={signUpFunction, logInFunction}
