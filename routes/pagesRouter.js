const express = require('express')
const axios = require('axios')
const router=express.Router()
const moment = require('moment')
const math = require('math')


router.get('/',async(req,res)=>{
    try {

        var featureUrl = 'http://newsapi.org/v2/top-headlines?country=gb&pageSize=1&sortBy=publishedAt&apiKey=d14cdfe35cc445f9aa0cc7eb92c38111';
        var headlinesUrl = 'http://newsapi.org/v2/top-headlines?country=gb&pageSize=6&sortBy=popularity&apiKey=d14cdfe35cc445f9aa0cc7eb92c38111';
        var sportUrl =  `http://newsapi.org/v2/everything?q='uk sport'&pageSize=6&sortBy=popularity&apiKey=d14cdfe35cc445f9aa0cc7eb92c38111`
        var financeUrl =  `http://newsapi.org/v2/everything?q='finance'&pageSize=10&sortBy=popularity&apiKey=d14cdfe35cc445f9aa0cc7eb92c38111`

        const feature_get = await axios.get(featureUrl)
        const headlines_get = await axios.get(headlinesUrl)
        const sport_get = await axios.get(sportUrl)
        const finance_get = await axios.get(financeUrl)
        res.render('pages/index',{
            featureArticles:feature_get.data.articles,
            headArticles:headlines_get.data.articles,
            sportArticles:sport_get.data.articles,
            financeArticles:finance_get.data.articles
        
        })
    
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})


router.post('/search',async(req,res)=>{
    const search=req.body.search
     console.log(req.body.search)

    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=d14cdfe35cc445f9aa0cc7eb92c38111`

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})


router.get('/headlines', async (req, res) => {
    try{
        var url = 'http://newsapi.org/v2/top-headlines?country=gb&pageSize=10&sortBy=publishedAt&apiKey=d14cdfe35cc445f9aa0cc7eb92c38111'
        const news_get = await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    }
    catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})
router.get('/sport', async (req, res) => {
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
router.get('/coronavirus', async (req, res) => {
    try{
        var url = `http://newsapi.org/v2/everything?q='coronavirus'&apiKey=d14cdfe35cc445f9aa0cc7eb92c38111`
        const news_get = await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    }
    catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})
router.get('/sience', async (req, res) => {
    try{
        var url = `http://newsapi.org/v2/everything?q='science technology'&apiKey=d14cdfe35cc445f9aa0cc7eb92c38111`
        const news_get = await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    }
    catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})
router.get('/business', async (req, res) => {
    try{
        var url = `http://newsapi.org/v2/everything?q='business'&apiKey=d14cdfe35cc445f9aa0cc7eb92c38111`
        const news_get = await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    }
    catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})
router.get('/finance', async (req, res) => {
    try{
        var url = `http://newsapi.org/v2/everything?q='finance'&apiKey=d14cdfe35cc445f9aa0cc7eb92c38111`
        const news_get = await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    }
    catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})
router.get('/travel', async (req, res) => {
    try{
        var url = `http://newsapi.org/v2/everything?q='travel'&apiKey=d14cdfe35cc445f9aa0cc7eb92c38111`
        const news_get = await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    }
    catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})
router.get('/arts', async (req, res) => {
    try{
        var url = `http://newsapi.org/v2/everything?q='arts'&apiKey=d14cdfe35cc445f9aa0cc7eb92c38111`
        const news_get = await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    }
    catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})
router.get('/trending', async (req, res) => {
    try{
        var url = `http://newsapi.org/v2/everything?q='trending'&apiKey=d14cdfe35cc445f9aa0cc7eb92c38111`
        const news_get = await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    }
    catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})


















module.exports=router