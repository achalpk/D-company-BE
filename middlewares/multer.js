const multer  = require('multer')

let fieldName;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images')
  },
  filename: function (req, file, cb) {
    fieldName = file.fieldname;
    req.body.file=Date.now()+file.originalname
    cb(null, req.body.file)
  }
})

const upload = multer({ 
  storage: storage,
  limits: {fileSize: 3e+6} 
 });

 
module.exports={upload};
