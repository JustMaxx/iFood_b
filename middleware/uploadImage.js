const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.resolve(__dirname, '../../front-end/src/img'));
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	}
});
const uploadImg = multer({storage: storage});

module.exports = uploadImg