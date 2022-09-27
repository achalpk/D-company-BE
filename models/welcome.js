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

const addWelcome = async (data)=>{
    const db = dbConn();
    try{
        await db.query('INSERT INTO welcome(`title`, `desc`) VALUES (?, ?)',
        [data.title, data.desc]);
        return true;
    }
    catch(error){
        return false;
    }
    finally{
        await db.close();
    }
}

const editWelcome = async (data)=>{
    const db = dbConn();
    try{
        const result = await db.query('UPDATE welcome SET `title` = ?, `desc` = ? WHERE `id` = ?',
        [data.title, data.desc, data.id]);
        return true;
    }
    catch(error){
        return false;
    }
    finally{
        await db.close();
    }
}

const deleteWelcome = async (id)=>{
    const db = dbConn();
    try{
        await db.query('DELETE FROM welcome WHERE id = ?', [id]);
        return true;
    }
    catch(error){
        return false;
    }
    finally{
        await db.close();
    }
}

module.exports={welcomeFunction, addWelcome, editWelcome, deleteWelcome}


