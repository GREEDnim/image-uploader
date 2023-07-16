const Image=require('../models/image');
const path = require('path');

async function storeImage(req,res){

    try {
        const image=new Image({
            fileName:req.file.filename,
        })
        // console.log(image);
        await image.save();
        res.status(200).json({
            message:"image uploaded successfully",
            imageId:image._id,
        });
        
    } catch (error) {
        res.status(500).json(error.message);
    }
}

async function getImage(req,res){
    try {
        const id=req.params.id;
        const image = await Image.findById(id);
        if (!image) return res.status(404).json({ error: 'Image not found' });
        
        const fileName=image.fileName;
        const imagePath = path.join(__dirname, '../assets', fileName);
        res.sendFile(imagePath);
        
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch image' });
    }
}
module.exports={
    storeImage,
    getImage,
}
