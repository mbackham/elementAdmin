const express = require('express')
const app = express()
app.use(require('cors')())
app.use(express.json())
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/element-admin',{
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true
})
const Article = mongoose.model('Article', new mongoose.Schema({
  title: {type: String},
  body: {type: String}
}))
app.get('/', async (req, res) => {
    res.send('index')
})
//新增文章
app.post('/api/articles', async (req, res) =>   {
    const article = await Article.create(req.body) 
    res.send(article)
     
})
app.get('/api/articles',async(req,res)=>{
    const articles = await Article.find()
    res.send(articles)
})
app.listen(3001, () => {
    console.log('http://localhost:3001')
})