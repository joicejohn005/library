const express=require("express")
const app=new express(); //creating constructor; app=object of express

app.set('view engine','ejs')
app.set('views',__dirname+'/src/views')

//create router
app.get('/',function (req,res)
{
    //res.send("Helo.....welcome to blank")
    //res.sendFile(__dirname+"/src/views/index.html")
    res.render("library")
})

app.get('/library',function(req,res){
    res.render("lib_login")
})
app.listen (3210);