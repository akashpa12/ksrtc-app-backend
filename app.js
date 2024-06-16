const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bcryptjs=require("bcryptjs")
const {ksrtcmodel}=require("./models/ksrtc")
const ksrtc=require("./models/ksrtc")

const app=express()
app.use(cors())
app.use(express.json())
const generateHashedPassword=async(password)=>{
    const salt=await bcryptjs.genSalt(10)
    return bcryptjs.hash(password,salt)

}

    
    


app.post("/signup",async(req,res)=>{
    let input=req.body
    let hashedPassword= await generateHashedPassword(input.password)
    console.log(hashedPassword)
    input.password=hashedPassword
    let ksrtc=new ksrtcmodel(input)
    res.json({"status":"success"})
})

app.listen(8081,()=>{
    console.log("server started")
})