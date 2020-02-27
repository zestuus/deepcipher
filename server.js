const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
const bodyParser = require('body-parser');

app.listen(port,()=>console.log(`listening on port ${port}...`));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/save', (req, res)=> {
  const content = req.body.content;
  const name = req.body.filename;

  const hasExtention = name.indexOf(".txt") === -1;
  const filename = hasExtention ? name + ".txt" : name;
  const filePath = __dirname + "/to_be_sent/"+ filename

	fs.writeFile(filePath, content,()=>{
    console.log('file is created');
    res.download(filePath, () => 
      fs.unlink(filePath, () => 
        console.log("file is downloaded and removed")
    ));
  });
});