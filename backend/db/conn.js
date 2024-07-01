const mongoose = require("mongoose")

require("dotenv").config()

async function main(){
    try{
        await mongoose.connect(
            `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.y90yeio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        )
        console.log("Conectado ao banco")
    }catch(error){
        console.log(`Error: ${error}`)
    }
}

module.exports = main