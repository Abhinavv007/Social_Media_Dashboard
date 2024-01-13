import express from "express"
import SocialModel from "../models/SocialModel.js"
const router = express.Router()

router.post("/add",async(req,resp)=>{
try {
    const {imageurl,description,postedBy}=  req.body
    if(imageurl&&description){
     const newData = new SocialModel({imageurl,description,postedBy})
     const result = await newData.save()
     resp.json({msg:"Post uploaded successfully"})
    } else{
        resp.json({msg:"All fields are required"})
    }
} catch (error) {
    console.error(error)
}
})

router.get("/get",async(req,resp)=>{
    const getData = await SocialModel.find({})
    if(getData){
        resp.json({msg:getData})
         
    } else{
        resp.json({msg:"No data to show"})
    }
})

export default router