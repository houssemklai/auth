const express=require('express');
const userSchema=require('../models/auth')
const isAuth = require("../madelwere/isAuth")
const authRoute=express.Router()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const { RegisterValidation, Validator } = require('../madelwere/Validation');
authRoute.post('/signup', RegisterValidation,Validator,async(req,res)=>{

const {email,password}=req.body
try {
    const user= new userSchema(req.body)
    const found =await userSchema.findOne({email})
    if (found) {return res.status(400).send('user already exists')}
const salt=10
const hashedpassword=bcrypt.hashSync(password,salt)
user.password=hashedpassword
const payload={_id:user._id}
const token=jwt.sign(payload,process.env.sercretOrkey)


await user.save()
res.status(200).send({msg:"register successed", user,token})
} catch (error){
    res.status(500).send({errors:[{msg:'not register'}]})
}


})
authRoute.post('/signin',  async(req,res)=>{
    const {email,password}=req.body
try {
    
    const user =await userSchema.findOne({email})
    if (!user) { return res.status(400).send({errors:[{msg:"bad credentials"}]})   }
    const match = bcrypt.compareSync(password,user.password)
    if(!match){return  res.status(400).send({errors:[{msg:"bad credentials"}]})}

    const payload={_id:user._id}
    const token=jwt.sign(payload,process.env.sercretOrkey)
    res.status(200).send({msg:"login succudes",user,token})
    
} catch (error) {
    res.status(500).send({errors:[{msg:'not login'}]})
}


})
authRoute.get('/me', isAuth,  (req,res)=>  res.send(req.user)  )
module.exports=authRoute