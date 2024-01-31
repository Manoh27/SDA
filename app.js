const express = require('express')
const path = require('path')
const app = express()
const port = 8000
const mongoose = require('mongoose');
const bodyparser = require('body-parser')

mongoose.connect('mongodb://localhost/grokart')

const contactSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: String,
    number: String,
    email: String,
    address: String,
    desc: String
  });
const Contact = mongoose.model('Contact', contactSchema);


app.use('/static',express.static('static'))
app.use(express.urlencoded())
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/', (req,res) => {
    const params = {}
    res.status(200).render('home.pug',params)
})
app.get('/about', (req,res) => {
    const params = {}
    res.status(200).render('intro.pug',params)
})
app.get('/about/intro', (req,res) => {
    const params = {}
    res.status(200).render('intro.pug',params)
})
app.get('/about/mission', (req,res) => {
    const params = {}
    res.status(200).render('mission.pug',params)
})
app.get('/services', (req,res) => {
    const params = {}
    res.status(200).render('services.pug',params)
})
app.get('/services/classical', (req,res) => {
    const params = {}
    res.status(200).render('classical.pug',params)
})
app.get('/services/rockandroll', (req,res) => {
    const params = {}
    res.status(200).render('rockandroll.pug',params)
})
app.get('/services/western', (req,res) => {
    const params = {}
    res.status(200).render('western.pug',params)
})
app.get('/services/health', (req,res) => {
    const params = {}
    res.status(200).render('health.pug',params)
})
app.get('/sponsors', (req,res) => {
    const params = {}
    res.status(200).render('sponsors.pug',params)
})
app.get('/contact', (req,res) => {
    const params = {}
    res.status(200).render('contact.pug',params)
})
app.post('/contact', (req,res) => {
    var myData = new Contact(req.body)
    myData.save().then(()=> {
        res.send('This item has been saved to the database')
    }).catch(()=>{
        res.status(400).send('Item was not saved to the database')
    })
})
app.listen(port, ()=> {
    console.log(`The Application is running successfully on Port ${port}`)
})
