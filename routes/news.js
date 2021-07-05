const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')

newsr.get('/',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=gb&' +
          'apiKey=d14cdfe35cc445f9aa0cc7eb92c38111';

        const news_get = await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})
newsr.get('/sport', async (req, res) => {
    try{
        var url = `http://newsapi.org/v2/everything?q='sport'&apiKey=d14cdfe35cc445f9aa0cc7eb92c38111`
        const news_get = await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    }
    catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})



// newsr.post('/search',async(req,res)=>{
//     const search=req.body.search
//      console.log(req.body.search)

//     try {
//         var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=d14cdfe35cc445f9aa0cc7eb92c38111`

//         const news_get =await axios.get(url)
//         res.render('news',{articles:news_get.data.articles})
        
//     } catch (error) {
//         if(error.response){
//             console.log(error)
//         }

//     }
// })


module.exports=newsr