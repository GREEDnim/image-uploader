const multer  = require('multer')
const uuid = require('uuid');
const storage = multer.diskStorage({
    destination: 'assets/',
    filename: function (req, file, cb) {
        const fileExtension=file.originalname.split('.')[1];
      cb(null,uuid.v4() +'.' + fileExtension);
    },
  });
  const fileFilter = function (req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
      cb(null, true); // Accept the file
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, and GIF files are allowed.'), false); // Reject the file
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5, // Limit file size to 5MB (in bytes)
    },
    fileFilter: fileFilter,
  });

  module.exports=upload;

