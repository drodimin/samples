const express = require('express');

const app = express();

app.set('view engine', 'pug')
app.set('views', './views');

app.get('/', function (req, res) {
    const time = (new Date()).toTimeString();
    res.render('template', { time })
});

const port = 5005;
app.listen(port, () => console.log('server started on port', port));