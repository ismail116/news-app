const request = require("request");

// const url = 'https://newsapi.org/v2/everything?q=tesla&apiKey=0401d5ff4aed427faa25381db193a8b8'

const news = (callback) =>{
    const url = "https://newsapi.org/v2/everything?q=apple&sortBy=currently&apiKey=af5befe59aad4c1fba33ec6b0130b615"
    request({url,json:true,headers:{"User-Agent":"Chrome"}},(error,response)=>{
        // low level error
        if(error){
            callback('Error has ocurred',undefined)
        }
        else if(response.body.message){
            callback(response.body.message,undefined)
        }
        else if(response.body.articles.length === 0){
            callback('Please enter valid data',undefined)
        }
       
        else {
            callback(undefined,response.body.articles)
        }
    })
}
module.exports = news
