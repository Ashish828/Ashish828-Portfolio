const express = require('express');

const User = require('../mongoDB/models/user-model')

const router = new express.Router()

router.post('/contact/details', async (req,res)=>{
    try{
        
        const user = new User(req.body)
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router