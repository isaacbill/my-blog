const { render } = require('ejs');
const { response } = require('express');
const express= require('express')
const mongoose=require('mongoose')


const blogRoutes= require('./Routes/blogRoutes')

const app = express();
const dbURI='mongodb+srv://IsaacOkeyo:Philantropist001@cluster0.vvpvqux.mongodb.net/IsaacB?retryWrites=true&w=majority'

mongoose.connect(dbURI)
    .then((result)=> app.listen(5000))
    .catch((err)=>console.log(err))

app.set('view engine', 'ejs')


app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));


//basic routes

app.get('/', (req,res)=>{
    res.redirect('/blogs')
})
app.get('/about', (req,res)=>{
    res.render('about', {title:'About'});
})
//blog routes
app.use('/blogs',blogRoutes)

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})

