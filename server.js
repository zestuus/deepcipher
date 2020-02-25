const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs = require("fs");

app.listen(port,()=>console.log(`listening on port ${port}...`))

app.use(express.static("public"));

app.post("/upload", upload.single('file'), (req, res)=> {
	fs.readFile(req.file.path, 'utf8', function(err, contents) {
	    const filename = req.file.originalname;
	    fs.unlinkSync(req.file.path)
	    const data = {
	    	filename,
	    	contents
	    }
	    res.send(data)
	});
})