import multer from 'multer'

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null , 'uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null , `${Date.now()}-${file.originalname}`);
    }
});

const filefilter = (req,file,cb)=>{
    const allowedTypes = ['image/jpeg' , 'image/png' , 'image/jpg'];
    if(allowedTypes.includes(file.mimetype)){
        cb(null,true);
    }else{
        cb(new Error('Invalid File Formate') , false);
    }
}

export const upload = multer({storage, filefilter})