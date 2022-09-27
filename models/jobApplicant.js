const {dbConn} = require('../library/database');

const jobApplicantFunction = async ()=>{
    const db = dbConn();
    try{
        let result = await db.query('SELECT ja.id AS id, u.username AS name , j.title AS title FROM job_applicant ja JOIN users u ON ja.user_id = u.id JOIN job j ON ja.job_id=j.id');
        return result;
    }
    catch(error){
        return false;
    }
    finally{
        await db.close();
    }
}

const deleteJobApplicant = async (id)=>{
    const db = dbConn();
    try{
        await db.query('DELETE FROM job_applicant WHERE id = ?', [id]);
        return true;
    }
    catch(error){
        console.log(error)
        return false;
    }
    finally{
        await db.close();
    }
}

module.exports={jobApplicantFunction, deleteJobApplicant}


