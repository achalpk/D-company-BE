const {dbConn} = require('../library/database');

const jobFunction = async ()=>{
    const db = dbConn();
    try{
        let result = await db.query('SELECT * FROM job');
        return result;
    }
    catch(error){
        return false;
    }
    finally{
        await db.close();
    }
}

const addJob = async (data)=>{
    const db = dbConn();
    try{
        await db.query('INSERT INTO job(`title`, `description`, `experience`, `location`) VALUES (?, ?, ?, ?)',
        [data.title, data.desc, data.exp, data.location]);
        return true;
    }
    catch(error){
        return false;
    }
    finally{
        await db.close();
    }
}


const deleteJob = async (id)=>{
    const db = dbConn();
    try{
        await db.query('DELETE FROM job WHERE id = ?', [id]);
        return true;
    }
    catch(error){
        return false;
    }
    finally{
        await db.close();
    }
}

module.exports={jobFunction, addJob, deleteJob}


