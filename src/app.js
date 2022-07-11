const request = require("request");

const express = require('express')
const path = require('path')

const publicDirectory = path.join(__dirname, '../public')

const app = express()
const port = process.env.PORT || 3000
////////////////////////////////////////////////////////////////
// For serve public Folders

app.use(express.static(publicDirectory))

////////////////////////////////////////////////////////////////

const viewsPath = path.join(__dirname, '../template/views')
app.set('views', viewsPath)
////////////////////////////////////////////////////////////////

const hbs = require('hbs')
const partialsPath = path.join(__dirname, '../template/partials/')
hbs.registerPartials(partialsPath)

//////////////////////////////////////////////////////////////////

const url = "https://newsapi.org/v2/everything?q=egypt&sortBy=currently&apiKey=af5befe59aad4c1fba33ec6b0130b615"

//  app.get('/*', (req, res) => {

request({ url, json: true }, (error, response) => {

 app.get('*', (req, res) => {

  if (error) {

    // app.get('/error', (req, res) => {
      res.render('error', {
        title: ' Error Not Found',
        desc: 'Error!'
      })
    // }); //app.get

  }
  
  // success
   
  else {
    // app.get('/', (req, res) => {
      res.render('index', {
        // image:response.body.articles[0].urlToImage,
        title1:response.body.articles[0].title,
        desc:response.body.articles[0].description,
        detail:response.body.articles[0].url
      })

      // }) 
    
  }

  })

})

// })


////////////////////////////////////////////////////////////////////////////////////////////////


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})