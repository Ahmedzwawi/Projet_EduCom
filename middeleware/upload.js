const multer=require("multer")
const path=require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null,(Date.now()+file.originalname));
    }
}); 
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png'|| file.mimetype == 'application/pdf') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}     



const upload = multer({storage:storage,fileFilter:fileFilter});
module.exports=upload
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                