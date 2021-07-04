const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router = express.Router()

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../views/index.html'))
    res.render('home');
})

router.get('/blog', (req, res) => {
    // blogs.forEach(e => {
    //     console.log(e.title);
    // })

    // res.sendFile(path.join(__dirname, '../views/blogHome.html'))
    res.render('blogHome', {
        blogs: blogs
    });
})

router.get('/blogpost/:slug', (req, res) => {
    myBlog = blogs.filter((e) => {
        return e.slug == req.params.slug
    })

    console.log(myBlog)
    res.render('blogPage', {
        title: myBlog[0].title, // myBlog is an array so we get it's 0th object
        content: myBlog[0].content
    });
    // res.sendFile(path.join(__dirname, '../views/blogPage.html'))
})

module.exports = router