const path = require ('path');
const express = require('express');
const hbs = require('hbs');
console.log(__dirname);
const publicDirectoryPath = (path.join(__dirname, '../public'));
const viewsPath = (path.join(__dirname, '../templates/views'));
const partialsPath = (path.join(__dirname, '../templates/partials'));
//const helpDirectoryPath = (path.join(__dirname, '../help'));
//const aboutDirectoryPath = (path.join(__dirname, '../about'));
const app = express ();

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Dynamic Content using templating engines',
        name: 'Bonaventure Tonui'
    });
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'This is the about Page',
        name: 'Bonaventure Tonui'
    });
})

app.get('/help', (req, res)=>{
    res.render('help', {
        helpText: ' help Page'
       
    });
})


// app.get('/about', (req, res)=>{
//     res.send('This is the about page');
// })

// app.get('/help', (req, res)=>{
//     res.send('This is the help page');
// })
//app.com
//app.com/help
//app.com/about

app.listen(3000,() => {
    console.log('Server is up on port 3000');
});