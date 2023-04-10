const express = require ('express');
const morgan = require('morgan');
const app =  express();

app.set('view engine','ejs');

app.listen(3000);

app.use((req,res,next)=>{
    console.log('new request made')
    console.log('host:',req.hostname);
    console.log('path:',req.path);
    console.log('method',req.method);
    next();
});

app.use((req,res,next)=>{
    console.log('new request made')
    next();
});

app.get('/',(req,res)=>
    {
        const blogs =[
            {title:'yoshi',snippet:"lorem"},
            {title:'joshi',snippet:"hello"},
            {title:"koshi",snippet:"hi"}
        ]
        res.render('index',{title:"Home",blogs});
    });

app.get('/about',(req,res)=>{
    res.render('about',{title:"About"})
}) 

app.get('/blogs/create',(req,res)=>{
    const blogs =[
        {title:'yoshi',snippet:"lorem"},
        {title:'joshi',snippet:"hello"},
        {title:"koshi",snippet:"hi"}
    ]  
    res.render('create',{title:"Home",blogs});
})

app.use((req,res)=>{
    res.status(404).render('404',{title:"404"});
});
