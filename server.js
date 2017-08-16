var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
    title: 'Article One | Tivya',
    heading: 'Article One',
    date: '12,August 2017',
    content:`<div>
                Hi All!!!
            </div>
            <div>
                <p>
                  This is my first article in IMAD. I'm very much excited by learning these things. Still I can't believe that I'm doing this by myself!!!  
                </p>
                <p>
                    I'm now happy by joining this course and eagerly awaiting to learn more & more stuffs.
                </p>'`
}
function createtemplate (data){
    var title = data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var htmltemplate = `
<html>
    <head>
        <title>
        ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div>
                <a href='/'>Home</a>
         </div>
            <div class="Tivya">
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            </div>
            <hr/>
            <div class = "container">
            ${content}
            </div>
            </div>
    </body>
</html>'`;
return htmltemplate
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get ('/article-one',function (req, res) {
    res.send(createtemplate(articleone));
});

app.get('/article-two',function (req, res){
    res.sendfile(path.join(__dirname, 'ui', 'Article Two.html'));
});

app.get('/article-three',function (req, res){
    res.sendfile(path.join(__dirname, 'ui', 'Article three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
