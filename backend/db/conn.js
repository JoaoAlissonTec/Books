const mongoose = require("mongoose")

async function main(){
    try{
        await mongoose.connect(
            "mongodb+srv://joaoalisson222005:13242526Ab@cluster0.y90yeio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        )
        console.log("Conectado ao banco")
    }catch(error){
        console.log(`Error: ${error}`)
    }
}

module.exports = main