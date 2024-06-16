const mongoose= require("mongoose")

const schema=mongoose.Schema(
    {
        "name":String,
        "email":String,
        "password":String,
        "conformPassword":String

    }
)
let ksrtcmodel=mongoose.model("ksrtc",schema)
module.exports={ksrtcmodel}