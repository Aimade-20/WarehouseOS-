import mongoose from "mongoose";


const MONGODB_URI : string = process.env.MONGODB_URI!


if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in .env.local")
}

let isConnected  : boolean = false

export default async function connectDb() {
    if(isConnected) return
    try {
        await mongoose.connect(MONGODB_URI)
        isConnected = true 
        console.log("MongoDb is connected");
    } catch (error) {
        console.log("MongoDb error",error);
        throw new Error("DataBase connected failed")
    }
}