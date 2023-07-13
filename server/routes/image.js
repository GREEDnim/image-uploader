const express=require('express');
const router=express.Router();
const upload=require('../controllers/fileHandler')
const {storeImage,getImage}=require('../controllers/image')


router.post('/image', upload.single('image'),storeImage);
router.get('/image/:id',getImage);
module.exports=router ;