const express = require('express')
const app = express()
const path = require('path')
const news = require('./tools/news')
const viewsPath = path.join(__dirname,'../template/views')
//const partialsPath = path.join(__dirname,'../template/partials')
const port = process.env.PORT || 3000

app.set('view engine','hbs')
app.set('views',viewsPath)
//app.set('partials',partialsPath)



//////////////////////////////////////////////////////////////////



app.get('/',(req,res)=>{
news((error,data)=>{
    if(error){
        return res.render('error',{
            error:'Error page'
        })
    }
    res.render('news',{
        title:'All news',
        data
        
    })
})
})





////////////////////////////////////////////////////////////////////////////////////////////////


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})