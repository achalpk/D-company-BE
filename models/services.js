const {dbConn} = require('../library/database');

const servicesFunction = async ()=>{
    const db = dbConn();
    try{
        let result = await db.query('SELECT * FROM services');
        return result;
    }
    catch(error){
        return false;
    }
    finally{
        await db.close();
    }
}

const addService = async (data)=>{
    const db = dbConn();
    try{
        await db.query('INSERT INTO services(title,short_desc,long_desc,image) VALUES(?,?,?,?)',
        [data.title, data.short_desc, data.long_desc, data.image]);
        return true;
    }
    catch(error){
        return false;
    }
    finally{
        await db.close();
    }
}

const editService = async (data)=>{
    const db = dbConn();
    try{

        const result = await db.query('UPDATE services set title = IFNULL(?, title), short_desc = IFNULL(?, short_desc), long_desc = IFNULL(?, long_desc), image = IFNULL(?, image) WHERE id = ?',
        [data.title, data.short_desc, data.long_desc, data.image, data.id]);
        return true;
    }
    catch(error){
        return false;
    }
    finally{
        await db.close();
    }
}

const deleteService = async (id)=>{
    const db = dbConn();
    try{
        await db.query('DELETE FROM services WHERE id = ?', [id]);
        return true;
    }
    catch(error){
        return false;
    }
    finally{
        await db.close();
    }
}

module.exports={servicesFunction, addService, editService, deleteService}
