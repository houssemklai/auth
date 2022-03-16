const mongoose=require('mongoose')

const connectDb= async()=>{

try {
    await mongoose.connect(process.env.mongo_urel)
    console.log("db is connect")
    
} catch (error) {
    console.log(error)
}



}
module.exports =connectDb