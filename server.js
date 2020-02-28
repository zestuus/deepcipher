const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
const bodyParser = require('body-parser');
const docx = require('docx');

app.listen(port,()=>console.log(`listening on port ${port}...`));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/save', (req, res)=> {
  const content = req.body.content;
  const name = req.body.filename;

  const isDoc = name.indexOf(".doc")!==-1;
  const isTxt = name.indexOf(".txt") !== -1;
  let filename;
  if (isDoc || isTxt) {
    filename = name
  } else {
    filename = name + ".txt";
  }
  const filePath = __dirname + "/to_be_sent/"+ filename
  
  if(isDoc) {
    const doc = new docx.Document();
    doc.addSection({
      children: [new docx.Paragraph({text:content})]
    })
    docx.Packer.toBuffer(doc)
      .then((buffer) => {
        fs.writeFile(filePath,buffer,()=> {
          res.download(filePath, () =>
            fs.unlink(filePath, ()=>
              console.log('file is delivered!'))
          );
        })
      });
   
  } else {
  	fs.writeFile(filePath, content,()=>{
      res.download(filePath, () => {
        fs.unlink(filePath, ()=>console.log('file is delivered!'));
      });
    });
  }
});

