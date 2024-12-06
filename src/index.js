import 'dotenv/config' 



import express from "express";
import connectDB from "./db/index.js";
const app = express();


connectDB( )











/*

// efi code
( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("error: ", error);
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
       })

    } catch (error) {
        console.error("Error: ", error)
        throw error
    }
})()

*/