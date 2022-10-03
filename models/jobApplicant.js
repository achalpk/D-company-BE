const {dbConn} = require('../library/database');

const jobApplicantFunction = async ()=>{
    const db = dbConn();
    try{
        // let result = await db.query('SELECT ja.id AS id, ja.resume, u.username AS name , j.title, u.phone, u.email, u.address, u.dob FROM job_applicant ja JOIN users u ON ja.user_id = u.id JOIN job j ON ja.job_id=j.id');
        let result = await db.query('SELECT ja.id, ja.name, ja.phone, ja.email,ja.address, ja.resume, j.title FROM job_applicant ja JOIN job j ON ja.job_id=j.id');
        return result;
    }
    catch(error){
        return false;
    }
    finally{
        await db.close();
    }
}

const jobApply = async (data)=>{
    const db = dbConn();
    try{
        await db.query('INSERT INTO job_applicant(user_id, job_id, name, phone, email, address, resume) VALUES(?,?,?,?,?,?,?)', [data.user_id, data.job_id, data.name, data.phone, data.email, data.address, data.resume]);
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

module.exports={jobApplicantFunction, jobApply, deleteJobApplicant}


